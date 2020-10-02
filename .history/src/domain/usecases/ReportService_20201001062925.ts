import { Report } from "../entities/Report";
import { ReportRepository } from "../repositories/ReportRepository";

export interface UserService {
  GetReport(): Promise<Report>;
}
