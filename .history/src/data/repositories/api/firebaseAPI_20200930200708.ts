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

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
const STORAGE_NAME = "UserDetails";
export const dataRef = db.collection(STORAGE_NAME)