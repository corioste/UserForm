import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): any;
  CreateUser(data: User): User[];
  UpdateUser(data: any): User[];
  DeleteUser(data: User): User[];
  SelectUser(data: User): User
}
