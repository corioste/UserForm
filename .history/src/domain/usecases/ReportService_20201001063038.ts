import { Report } from "../entities/Report";
import { ReportRepository } from "../repositories/ReportRepository";

export interface UserService {
  GetReport(): Promise<Report>;
}

class ReportServiceImp implements UserService {
    GetReport(): Promise<Report> {
        
    }
    
}