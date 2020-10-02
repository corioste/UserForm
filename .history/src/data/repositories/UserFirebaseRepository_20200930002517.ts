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
  firebase.initializeApp(firebaseConfig);

  class UserDTO {

    id: number = 0;
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
    dateOfBirth: string = "";
    email: string = "";
}