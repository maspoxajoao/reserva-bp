import { User } from "./../model/User";
import { Secret, sign, SignOptions } from "jsonwebtoken";
import { IUser } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(user: IUser): Promise<IUser> {
    try {
      const existingUser = await this.userRepository.getUserByEmail(user.email);

      if (existingUser) {
        throw new Error("E-mail já registrado");
      }

      const createdUser = await this.userRepository.createUser(user);
      return createdUser;
    } catch (error) {
      throw new Error(`Erro ao registrar usuário: ${(error as any).message}`);
    }
  }

  async authenticateUser(
    email: string,
    password: string
  ): Promise<string | null> {
    try {
      const user = await this.userRepository.getUserByEmail(email);

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const isPasswordValid = user.password == password;
      if (!isPasswordValid) {
        throw new Error("Senha inválida");
      }

      if (!process.env.JWT_SECRET) {
        throw new Error("Variável de ambiente JWT_SECRET não definida");
      }

      const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return token;
    } catch (error) {
      throw new Error(`Erro ao autenticar usuário: ${(error as any).message}`);
    }
  }

  async getUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await this.userRepository.getUserById(userId);
      return user;
    } catch (error) {
      throw new Error(
        `Erro ao obter usuário por ID: ${(error as any).message}`
      );
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await this.userRepository.getAllUsers();
      return users;
    } catch (error) {
      throw new Error(`
      Erro ao obter todos os usuários:${(error as any).message}`);
    }
  }

  async updateUser(
    userId: string,
    updateUserData: IUser
  ): Promise<IUser | null> {
    try {
      const updateUser = await this.userRepository.updateUser(
        userId,
        updateUserData
      );
      return updateUser;
    } catch (error) {
      throw new Error(`Erro ao atualizar o usuário: ${(error as any).message}`);
    }
  }

  async deleteUser(userId: string): Promise<boolean> {
    try {
      const result = await this.userRepository.deleteUser(userId);
      return result;
    } catch (error) {
      throw new Error(`Erro ao excluir usuário: ${(error as any).message}`);
    }
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const isPasswordValid = user.password == password;

    if (!isPasswordValid) {
      throw new Error("Credenciais inválidas");
    }

    console.log("Chave secreta:", process.env.JWT_SECRET);
    const token = sign(
      { userId: user._id },
      process.env.JWT_SECRET || "$suaChavePadrao",
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}

export default UserService;
