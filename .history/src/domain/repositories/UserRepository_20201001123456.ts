import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): Promise<User[]>;
  CreateUser(data: User): Promise<String>;
  UpdateUser(data: any): [];
  DeleteUser(data: User): []  ;
  SelectUser(data: User): any
}
