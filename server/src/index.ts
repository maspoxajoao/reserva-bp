import { Application, Request, Response, NextFunction } from "express";
import express from "express";
import { connectDB } from "./database/connect";
import router from "./domains/users/routes/UserRoutes";
import UserService from "./domains/users/service/UserService";
import UserController from "./domains/users/controller/UserController";

const app: Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

connectDB();

const userService = new UserService();
const userController = new UserController(userService);

app.use("/app/users", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
