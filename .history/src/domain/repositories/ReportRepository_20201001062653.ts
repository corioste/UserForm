import { Report } from "../entities/User";

export interface UsersRepository {
  GetReport(): Promise<Report>;
}
