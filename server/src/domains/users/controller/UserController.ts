import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
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

  getAllUsers = async (_: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  // Adicione métodos para atualizar e excluir usuários conforme necessário
}

export default UserController;
