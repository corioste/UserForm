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
onst STORAGE_NAME = "UserDetails";

export class UserLocalStorageRepositoryImpl implements UsersRepository {
    GetUser(): User[] {
        let dataRef = db.collection(STORAGE_NAME)
        let itemArray = await dataRef.get().then((querySnapshot: { docs: any[]; }) => {
      return querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    })
        return res.map((user: UserDTO) => new User(user.id, user.firstName, user.middleName, user.lastName, user.dateOfBirth, user.email));
    }

    CreateUser(data: User) {

        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')
        res.push(data)
        localStorage.setItem("userList", JSON.stringify(res))
       
    }

    UpdateUser(data: User) {
        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')

        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                res[i].firstName = data.firstName
                res[i].middleName = data.middleName
                res[i].lastName = data.lastName
                res[i].dateOfBirth = data.dateOfBirth
                res[i].email = data.email
                break;
            }
        }

        localStorage.setItem("userList", JSON.stringify(res))


       
    }

    DeleteUser(data: User) {

        var intData = parseInt(data.id.toString())
        var jsonString = localStorage.getItem("userList")
        var res = JSON.parse(jsonString || '[]')

        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                res.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("userList", JSON.stringify(res))

    }

    SelectUser(data: User): User {

        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("userList");
        var res = JSON.parse(jsonString || '[]');
        var firstName, middleName, lastName, dateOfBirth, email, id;
        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                
                firstName = res[i].firstName;
                middleName = res[i].middleName;
                lastName = res[i].lastName;
                dateOfBirth = res[i].dateOfBirth;
                email = res[i].email;
                id =  res[i].id;
                break;
            }
        }


        return new User(id, firstName, middleName, lastName, dateOfBirth, email);

    }
  