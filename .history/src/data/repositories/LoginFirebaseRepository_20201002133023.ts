import { Login } from '../../domain/entities/Login'
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { auth } from "./api/firebaseAPI"

class LoginDTO {
    email: string = ""
}

export class LoginRepositoryImpl implements LoginRepository {

    async ChangePassword(data: any): Promise<string> {
        var user = auth.currentUser;
        var cred = auth.EmailAuthProvider.credential(user.email, data.oldPassword)

        async function reqChangePassword() {
            return new Promise(function (resolve, reject) {
                user.reauthenticateWithCredential(cred).then(function () {
                    // User re-authenticated.
                }).catch(function (e) {
                    // An error happened.
                    console.log(e)
                });
            })
        }

        reqChangePassword()

        return "Success"
    }

    ForgotPassword(data: any): void {
        console.log(data.email)
        auth.sendPasswordResetEmail(data)
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