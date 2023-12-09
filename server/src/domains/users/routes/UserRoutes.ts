import express from "express";
import { UserController } from "../controller/UserController";
import UserService from "../service/UserService";

const router = express.Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post("/register", userController.registerUser);

export default router;
