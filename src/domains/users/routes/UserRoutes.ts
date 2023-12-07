import express from "express";
import { UserController } from "../controller/UserController";
import UserService from "../service/UserService";

const router = express.Router();
const userController = new UserController(new UserService());

router.post("/register", userController.registerUser);

export default router
