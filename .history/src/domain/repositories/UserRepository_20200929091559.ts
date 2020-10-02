import { User } from "../entities/User";

export interface UsersRepository {
  GetUserDetails(): User[];
  CreateUserDetails(data: User): User[];
  UpdateUserDetails(data: any): User[];
  DeleteUser(data: User): User[];
}
