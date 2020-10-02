import { Login } from "../entities/Login";

export interface LoginRepository {
    Login(data: any): Promise<string>;

    Register(data: any): Promise<string>;

    Logout(): Promise<string>

    GetLoggedUser(): Promise<any>;

    ForgotPassword(data: any): void;

    ChangePassword(data: any): Promise<string>
  }
  