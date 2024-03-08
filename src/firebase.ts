// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_aBz6Bva8QgKPGkh6qrCMuHpun9o0ldc",
    authDomain: "taskmessenger-4667d.firebaseapp.com",
    projectId: "taskmessenger-4667d",
    storageBucket: "taskmessenger-4667d.appspot.com",
    messagingSenderId: "371404961854",
    appId: "1:371404961854:web:82748090cbb8327f4cf96f",
    measurementId: "G-MM6HG66GHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const databse = getDatabase(app);
export const firestore = getFirestore(app);
