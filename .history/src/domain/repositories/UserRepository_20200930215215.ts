import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): Promise<User[]>;
  CreateUser(data: User): [];
  UpdateUser(data: any): void;
  DeleteUser(data: User): []  ;
  SelectUser(data: User): any
}
