import { Login } from '../../domain/entities/Login'
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { auth } from "./api/firebaseAPI"

class LoginDTO {
    email: string = ""
}

export class LoginRepositoryImpl implements LoginRepository{

    async LoadSession(): Promise<string> {
        var user = ""
        await auth
            .onAuthStateChanged((user) => {
                return user
            });
        return user
    }

    async Register(data: any): Promise<string> {
        
        await auth
            .createUserWithEmailAndPassword(data.email, data.password);

        return "Success"
    }

    async Login(data: any): Promise<string> {
        
        await auth
            .signInWithEmailAndPassword(data.email, data.password);
        
        return "Success"
       
    }
    GetLoggedUser(): Promise<Login> {
        throw new Error('Method not implemented.');
    }
    
    
    
}