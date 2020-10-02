import { Report } from "../entities/Report";
import { UsersRepository } from "../repositories/ReportRepository";

export interface UserService {
  GetUser(): Promise<Report>;
}
