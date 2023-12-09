import { Request, Response } from "express";
import UserService from "../service/UserService";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    console.log("userService received:", userService);

    this.userService = userService;
  }

  registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = req;
      const user = await this.userService.registerUser(body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json((error as any).message);
    }
  };
}

export default UserController;
