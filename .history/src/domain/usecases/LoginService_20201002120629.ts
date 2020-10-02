import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    Logout(): void;

    Register(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;

    ForgotPassword(data:any): void;
}

export class LoginServiceImpl implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    ForgotPassword(data: any): void {
        throw new Error("Method not implemented.");
    }
    Logout() {
       this.loginRepo.Logout()
    }
    async Register(data: any): Promise<string> { 
        return await this.loginRepo.Register(data)
    }
    async Login(data: any): Promise<string> {
        return await this.loginRepo.Login(data)
    }
    async GetLoggedUser(): Promise<any> {
        var loginUser =  await this.loginRepo.GetLoggedUser()
        if (loginUser == null)
            return {payload: [] , isLoggedIn: false}
        else{
            return {payload: loginUser , isLoggedIn: true}
        }
    }
    
}