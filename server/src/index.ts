import dotenv from "dotenv";
dotenv.config();
import { Application, Request, Response, NextFunction } from "express";
import express from "express";
import { connectDB } from "./database/connect";
import userRouter from "./domains/users/routes/UserRoutes";
import appointmentRouter from "./domains/appointments/routes/AppointmentRoutes";
import UserService from "./domains/users/service/UserService";
import UserController from "./domains/users/controller/UserController";
import AppointmentService from "./domains/appointments/service/AppointmentService";
import AppointmentController from "./domains/appointments/controller/AppointmentController";

const app: Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

connectDB();

// Users
const userService = new UserService();
const userController = new UserController(userService);
app.use("/app/users", userRouter);

// Appointments
const appointmentService = new AppointmentService();
const appointmentController = new AppointmentController(appointmentService);
app.use("/app/appointments", appointmentRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Alguma coisa deu errado!");
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
