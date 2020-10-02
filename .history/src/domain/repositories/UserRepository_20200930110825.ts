import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): Promise<User[]>;
  CreateUser(data: User): void;
  UpdateUser(data: any): void;
  DeleteUser(data: User): void;
  SelectUser(data: User): any
}
