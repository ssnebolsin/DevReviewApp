// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "devreviewapp-60bdb.firebaseapp.com",
  projectId: "devreviewapp-60bdb",
  storageBucket: "devreviewapp-60bdb.appspot.com",
  messagingSenderId: "138200778134",
  appId: "1:138200778134:web:a36dfc96c847d7f4b649b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();