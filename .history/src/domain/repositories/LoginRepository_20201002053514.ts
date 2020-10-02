import { Login } from "../entities/Login";

export interface LoginRepository {
    RequestLogin(): Promise<string>;

    GetLoggedUser(): Promise<Login>;
  }
  