const firebase = require("firebase");
require("firebase/firestore");

export const firebaseConfig = {
    apiKey: "AIzaSyDEJD0oeL4ZWNXY86UjJQpnItYoJ-hmsms",
    authDomain: "user-crud-c03f6.firebaseapp.com",
    databaseURL: "https://user-crud-c03f6.firebaseio.com",
    projectId: "user-crud-c03f6",
    storageBucket: "user-crud-c03f6.appspot.com",
    messagingSenderId: "997532838593",
    appId: "1:997532838593:web:58f3db1dea1bdba254c240"
};

firebase.initializeApp(firebaseConfig);

const STORAGE_NAME = "UserDetails";
const REPORT_NAME = "reports";

export const db = firebase.firestore();

export const userRef = db.collection(STORAGE_NAME)

export const reportRef = db.collection(REPORT_NAME)

export const storageRef = firebase.storage()

