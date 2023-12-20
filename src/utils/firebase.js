// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-285f3.firebaseapp.com",
  projectId: "blog-285f3",
  storageBucket: "blog-285f3.appspot.com",
  messagingSenderId: "544996352339",
  appId: "1:544996352339:web:78bcbb8f8be6ad296ec1a6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
