import { Login } from "../entities/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class ReportRepositoryImp implements LoginService {
    loginRepo: LoginRepository;

    constructor(loginRepo: LoginRepository){
        this.loginRepo = loginRepo;
    }
    Login(data: any): Promise<string> {
        throw new Error("Method not implemented.");
    }
    GetLoggedUser(): Promise<Login> {
        throw new Error("Method not implemented.");
    }

 
    
}