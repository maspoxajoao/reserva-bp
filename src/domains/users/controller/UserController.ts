import { Request, Response } from "express";
import UserService from "../service/UserService";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    console.log("userService received:", userService);

    this.userService = userService;
  }

  async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      console.log('Entre no registerUser antes de chamar userService.registerUser', this);

      const user = await this.userService.registerUser(body);
      console.log('Entre no registerUser após chamar userService.registerUser');

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json((error as any).message);
    }
  }
}
