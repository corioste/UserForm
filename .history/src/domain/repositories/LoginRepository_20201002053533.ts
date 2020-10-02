import { Login } from "../entities/Login";

export interface LoginRepository {
    Login(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
  }
  