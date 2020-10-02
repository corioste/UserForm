import { Report } from "../entities/Report";

export interface UsersRepository {
  GetReport(): Promise<Report>;
}
