import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    Register(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class LoginServiceImpl implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    async Register(data: any): Promise<string> { 
        return await this.loginRepo.Register(data)
    }
    async Login(data: any): Promise<string> {
        return await this.loginRepo.Login(data)
    }
    async GetLoggedUser(): Promise<any> {
        return await this.loginRepo.GetLoggedUser()

 
    
}