import { IUser, User } from "../model/User";


export class UserRepository {
  async createUser(user: IUser): Promise<IUser> {
    try {
      const createUser = await User.create(user);
      return createUser.toObject();
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email });
      return user ? user.toObject() : null;
    } catch (error) {
      throw new Error("Error getting user by email");
    }
  }
}

