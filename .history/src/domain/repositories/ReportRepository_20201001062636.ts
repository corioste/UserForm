import { Report } from "../entities/User";

export interface UsersRepository {
  GetUser(): Promise<User[]>;
}
