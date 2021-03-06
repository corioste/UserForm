import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class LoginServiceImpl implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    async Login(data: any): Promise<string> {
        return await this.loginRepo.Login(data)
    }
    GetLoggedUser(): Promise<Login> {
        throw new Error("Method not implemented.");
    }

 
    
}