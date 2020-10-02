import { User } from "../entities/User";

export interface UsersRepository {
  GetUser(): Promise<User[]>;
  CreateUser(data: User): Promise<any>;
  UpdateUser(data: any): Promise<any>;
  DeleteUser(data: User): []  ;
}
