import { Report } from "../entities/Report";
import { ReportRepository } from "../repositories/ReportRepository";

export interface UserService {
  GetReport(): Promise<Report>;
}

class ReportServiceImp implements UserService {
    reportRepo: ReportRepository;

    constructor(reportRepo: ReportRepository){
        this.reportRepo = reportRepo;
    }

    async GetReport(): Promise<Report> {
        var report = await 
    }
    
}