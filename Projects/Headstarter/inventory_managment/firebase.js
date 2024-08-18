// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpyo8uQgd825AvTfPP2mw3fiiRqWDUmvA",
    authDomain: "inventory-managment-370ec.firebaseapp.com",
    projectId: "inventory-managment-370ec",
    storageBucket: "inventory-managment-370ec.appspot.com",
    messagingSenderId: "439068761290",
    appId: "1:439068761290:web:fc8b09ab915165b586a833",
    measurementId: "G-F4V4WED5S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};