import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): any;
  CreateUser(data: User): void;
  UpdateUser(data: any): void;
  DeleteUser(data: User): void;
  SelectUser(data: User): any
}
