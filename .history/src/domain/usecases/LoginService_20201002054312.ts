import { Login } from "../entities/Login";
import { ReportRepository } from "../repositories/ReportRepository";

export interface LoginService {
    Login(data: any): Promise<string>;

    GetLoggedUser(): Promise<Login>;
}

export class ReportRepositoryImp implements UserService {
    reportRepo: ReportRepository;

    constructor(reportRepo: ReportRepository){
        this.reportRepo = reportRepo;
    }

 
    
}