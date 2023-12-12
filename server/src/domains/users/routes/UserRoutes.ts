import express from "express";
import { UserController } from "../controller/UserController";
import AppointmentController from "../../appointments/controller/AppointmentController";
import UserService from '../service/UserService';
import AppointmentService from "../../appointments/service/AppointmentService";

const router = express.Router();
const userService = new UserService();
const userController = new UserController(userService);
const appointmentService = new AppointmentService();
const appointmentController = new AppointmentController(appointmentService);

router.post("/register", userController.registerUser);
router.get("/", userController.getAllUsers);
router.get("/:useId", userController.getUserById);
router.put("/:useId", userController.updateUser);
router.delete("/:useId", userController.deleteUser);
router.post("/authenticate", userController.authenticateUser);
router.post("/login", userController.loginUser);
router.post("/schedule-appointment", appointmentController.scheduleAppointment);

export default router;
