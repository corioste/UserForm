import { Report } from "../../domain/entities/Report";
import { ReportRepository } from "../../domain/repositories/ReportRepository";
import { dataRef } from "./api/firebaseAPI"

class ReportDTO {

    male: number = 0
    female: number = 0
    other: number = 0

}