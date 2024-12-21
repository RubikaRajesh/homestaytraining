// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsE60fPrLn5FhGMAMqMry9g4H89weiyDA",
  authDomain: "homestay211224.firebaseapp.com",
  projectId: "homestay211224",
  storageBucket: "homestay211224.firebasestorage.app",
  messagingSenderId: "298239603484",
  appId: "1:298239603484:web:896d82e6bff2440a9d00d9",
  measurementId: "G-RVZXY9EDDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);