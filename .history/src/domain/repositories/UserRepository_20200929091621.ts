import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): User[];
  CreateUser(data: User): User[];
  UpdateUser(data: any): User[];
  DeleteUser(data: User): User[];
}
