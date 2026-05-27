// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1Ume0XgwrEIODPuQ90jGWsPV4mKAb4s",
  authDomain: "ellipa.firebaseapp.com",
  projectId: "ellipa",
  storageBucket: "ellipa.firebasestorage.app",
  messagingSenderId: "101482628590",
  appId: "1:101482628590:web:fb5059feb13286651c3aff",
  measurementId: "G-VY6K7DBY72"
};

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, analytics, auth, googleProvider, db };
