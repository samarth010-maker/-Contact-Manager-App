// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARO8gVoNRao-t6vT4ZeZ6aWBFqzBHzGEo",
  authDomain: "fir-contact-14764.firebaseapp.com",
  projectId: "fir-contact-14764",
  storageBucket: "fir-contact-14764.appspot.com",
  messagingSenderId: "19365978502",
  appId: "1:19365978502:web:9e63b3e37ba0416b930c07",
  measurementId: "G-BEVKRGPGFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
