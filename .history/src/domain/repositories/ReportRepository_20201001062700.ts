import { Report } from "../entities/genderCount";

export interface UsersRepository {
  GetReport(): Promise<Report>;
}
