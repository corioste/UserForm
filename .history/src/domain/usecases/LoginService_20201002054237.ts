import { Login } from "../entities/Login";
import { ReportRepository } from "../repositories/ReportRepository";

export interface LoginService {
  GetReport(): Promise<string>;
}

export class ReportServiceImp implements UserService {
    reportRepo: ReportRepository;

    constructor(reportRepo: ReportRepository){
        this.reportRepo = reportRepo;
    }

    async GetReport(): Promise<Report> {
        var report = await this.reportRepo.GetReport()

        return report
    }
    
}