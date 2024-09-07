// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0UpvYg_XzOaqzGh7uG913pQGDRPt6heI",
    authDomain: "flashcardsaas-8a594.firebaseapp.com",
    projectId: "flashcardsaas-8a594",
    storageBucket: "flashcardsaas-8a594.appspot.com",
    messagingSenderId: "32142522573",
    appId: "1:32142522573:web:20cf8e3399c3ad91e45184",
    measurementId: "G-BG1EVR02WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}