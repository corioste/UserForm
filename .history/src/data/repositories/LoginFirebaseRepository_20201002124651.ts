import { Login } from '../../domain/entities/Login'
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { auth } from "./api/firebaseAPI"

class LoginDTO {
    email: string = ""
}

export class LoginRepositoryImpl implements LoginRepository {
    
    ForgotPassword(data: any): void {
        console.log(data)
        auth.auth.sendPasswordResetEmail(data.email)
    }
    Logout() {
        auth.signOut()
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
    async GetLoggedUser(): Promise<any> {
        var user

        async function getSessions() {
            return new Promise(function (resolve, reject) {
                auth
                    .onAuthStateChanged((user: any) => {
                        resolve(user)
                    });
            })
        }

        user = await getSessions()
        console.log(user)
        return user;

    }
    



}