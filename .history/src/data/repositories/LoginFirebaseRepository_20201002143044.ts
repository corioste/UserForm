import { Login } from '../../domain/entities/Login'
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { auth } from "./api/firebaseAPI"


export class LoginRepositoryImpl implements LoginRepository {

    async ChangePassword(data: any): Promise<string> {
        var user = auth.currentUser;
        console.log(user)
        var cred = auth.EmailAuthProvider.credential(user.email, data.oldPassword)
        console.log(cred)

        async function reqChangePassword() {
            return new Promise(function (resolve, reject) {
                user
                .reauthenticateWithCredential(cred).then(function () {
                    // User re-authenticated.
                    // user.updatePassword(data.newPassword).then(function() {
                    //     // Update successful.
                    //   })
                    console.log("SUCCESS")
                }).catch(function(error: any) {
                   console.log(error)
                  });

                resolve()
            })
        }

        reqChangePassword()

        return "Success"
    }

    ForgotPassword(data: any): void {
        console.log(data.email)
        auth.sendPasswordResetEmail(data)
    }
    async Logout(): Promise<string> {
        await auth.signOut()

        return "Success"
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