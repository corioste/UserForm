import { Report } from "../entities/Report";
import { UsersRepository } from "../repositories/UserRepository";

export interface UserService {
  GetUser(): Promise<Report>;
}
