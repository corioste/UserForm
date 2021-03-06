import { Login } from "../entities/Login";

export interface LoginRepository {
    Login(data: any): Promise<string>;

    Register(data: any): Promise<string>;

    Logout(): void

    GetLoggedUser(): Promise<any>;

    ForgotPassword(data: any): void;

    ChangePassword(data: any): Promise<string>
  }
  