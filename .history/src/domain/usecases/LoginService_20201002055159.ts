import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class LoginRepositoryImp implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    async Login(data: any): Promise<string> {
        var user = await this.loginRepo.Login(data)

        return user
    }
    GetLoggedUser(): Promise<Login> {
        throw new Error("Method not implemented.");
    }

 
    
}