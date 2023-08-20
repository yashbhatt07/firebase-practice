// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByNgaLCmAPZQl7i7G5GsEfMu1rUH_WdJI",
  authDomain: "fir-practice-8ef23.firebaseapp.com",
  projectId: "fir-practice-8ef23",
  storageBucket: "fir-practice-8ef23.appspot.com",
  messagingSenderId: "510203072750",
  appId: "1:510203072750:web:9591799c99d52e0efb63ff",
  measurementId: "G-3GLEDX63DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)
export const  googleProvider =new  GoogleAuthProvider()
// const analytics = getAnalytics(app);