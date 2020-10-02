import { Login } from "../entities/Login";

export interface LoginRepository {
    GetReport(): Promise<Report>;
  }
  