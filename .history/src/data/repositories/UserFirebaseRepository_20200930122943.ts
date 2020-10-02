import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";


const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDEJD0oeL4ZWNXY86UjJQpnItYoJ-hmsms",
    authDomain: "user-crud-c03f6.firebaseapp.com",
    databaseURL: "https://user-crud-c03f6.firebaseio.com",
    projectId: "user-crud-c03f6",
    storageBucket: "user-crud-c03f6.appspot.com",
    messagingSenderId: "997532838593",
    appId: "1:997532838593:web:58f3db1dea1bdba254c240"
};
// Initialize Firebase


class UserDTO {

    id: number = 0;
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
    dateOfBirth: string = "";
    email: string = "";

}

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
const STORAGE_NAME = "UserDetails";
const dataRef = db.collection(STORAGE_NAME)

export class UserLocalStorageRepositoryImpl implements UsersRepository {
    async GetUser(): Promise<User[]> {

        let itemArray = await dataRef.get().then((querySnapshot: { docs: any[]; }) => {
            return querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
        })
       
        return itemArray.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.dateOfBirth, user.email));
    }

    async CreateUser(data: User) {
        dataRef
        .doc(data.id)
        .set({
            id:data.id,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            email: data.email,
        })
        .then(()=>{
            
        })
        .catch((err: any)=>{
            alert(err)
        })


    }

    async UpdateUser(data: User) {

        dataRef
        .doc(data.id)
        .set({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            email: data.email
        }, { merge: true })
            .then(() => {
                
            })
            .catch((err: any) => {
                alert(err)
            })
    }

    async DeleteUser(data: User) {

        await dataRef
        .doc(data).delete()
        .then(() => {
           console.log("DELETED")
        }).catch((err: any) => {
            alert(err)
        })


    }

    SelectUser(data: User): User {
        
        var firstName=data.firstName, middleName=data.middleName, lastName=data.lastName, dateOfBirth = data.dateOfBirth, email = data.email, id=data.id;
        return new User(id, firstName, middleName, lastName, dateOfBirth,gender email);
    }
}