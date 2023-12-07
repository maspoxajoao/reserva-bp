import { IUser } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(user: IUser): Promise<IUser> {
    console.log
    try {
      const existingUser = await this.userRepository.getUserByEmail(user.email);
      if (existingUser) {
        throw new Error("email already registered");
      }

      const createdUser = await this.userRepository.createUser(user);
      return createdUser;
    } catch (error) {
      throw new Error(`Error registering user: ${(error as any).message}`);
    }
  }
}

export default UserService