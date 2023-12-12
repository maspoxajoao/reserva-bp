import { Request, Response, response } from "express";
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

  authenticateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = req;
      const token = await this.userService.authenticateUser(
        body.email,
        body.password
      );
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json((error as any).message);
    }
  };

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
    } catch (error) {}
  };

  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const user = await this.userService.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "Usuario não encontrado" });
      }
    } catch (error) {
      res.status(500).json((error as any).message);
    }
  };

  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const { body } = req;
      const updateUser = await this.userService.updateUser(userId, body);

      if (updateUser) {
        res.status(200).json(updateUser);
      } else {
        res.status(404).json({ message: "Usuario não encontrado" });
      }
    } catch (error) {
      res.status(500).json((error as any).message);
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const result = await this.userService.deleteUser(userId);

      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Usuario não encontrado" });
      }
    } catch (error) {
      res.status(500).json((error as any).message);
    }
  };

  loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await this.userService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: "Falha na autenticação" });
    }
  };
}

export default UserController;
