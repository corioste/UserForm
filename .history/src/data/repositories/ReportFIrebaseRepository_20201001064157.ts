import { Report } from "../../domain/entities/Report";
import { ReportRepository } from "../../domain/repositories/ReportRepository";
import { reportRef } from "./api/firebaseAPI"

class ReportDTO {

    male: number = 0
    female: number = 0
    other: number = 0

}

export class ReportFirebaseRepositoryImpl implements ReportRepository{
    async GetReport(): Promise<Report> {
        
        const snapshot = await reportRef.get()

        let data = snapshot.docs.map((doc: { data: () => any; }) => doc.data());

        

    }
    
}