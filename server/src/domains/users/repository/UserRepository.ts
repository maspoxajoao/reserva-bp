import { IUser, User } from "../model/User";

export class UserRepository {
  async createUser(user: IUser): Promise<IUser> {
    try {
      const createUser = await User.create(user);
      return createUser.toObject();
    } catch (error) {
      console.error("Erro ao criar usuario", error);
      throw new Error("Erro ao criar usuário");
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email }).lean();
      return user ? user : null;
    } catch (error) {
      console.error("Erro ao receber usuário por e-mail", error);
      throw new Error("Erro ao receber usuário por e-mail");
    }
  }
  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await User.find().lean();
      return users.map((user) => user);
    } catch (error) {
      console.error("Erro ao obter todos os usuários", error);
      throw new Error("Erro ao obter todos os usuários");
    }
  }

  async getUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await User.findById(userId).lean();
      return user ? user : null;
    } catch (error) {
      console.error("Erro ao obter usuário por ID", error);
      throw new Error("Erro ao obter usuário por ID");
    }
  }

  async updateUser(
    userId: string,
    updateUserData: IUser
  ): Promise<IUser | null> {
    try {
      const updateUser = await User.findByIdAndUpdate(userId, updateUserData, {
        new: true,
      }).lean();
      return updateUser ? updateUser : null;
    } catch (error) {
      console.error("Erro ao atualizar o usuário", error);
      throw new Error("Erro ao atualizar o usuário");
    }
  }

  async deleteUser(userId: string): Promise<boolean> {
    try {
      const result = await User.findByIdAndDelete(userId);
      return !!result;
    } catch (error) {
      console.error("Erro ao atualizar o usuário", error);
      throw new Error("Erro ao atualizar o usuário");
    }
  }
}
