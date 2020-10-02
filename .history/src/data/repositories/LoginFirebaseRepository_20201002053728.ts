import { Login } from '../../domain/entities/Login'
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { auth } from "./api/firebaseAPI"

class LoginDTO {
    email: string = ""
}

export class LoginRepositoryImpl implements LoginRepository{
    Login(data: any): Promise<string> {
        throw new Error('Method not implemented.');
    }
    GetLoggedUser(): Promise<Login> {
        throw new Error('Method not implemented.');
    }
    
    
    
}