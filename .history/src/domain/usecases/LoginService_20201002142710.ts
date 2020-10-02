import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    Logout(): void;

    Register(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;

    ForgotPassword(data:any): void;

    ChangePassword(data:any): Promise<string>
}

export class LoginServiceImpl implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    ChangePassword(data: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    ForgotPassword(data: any): void {
        console.log(data)
        this.loginRepo.ForgotPassword(data)
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