import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    LogOut(): void;

    Register(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class LoginServiceImpl implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    LogOut() {
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
            return []
        else{
            return loginUser
        }
    }
    
}