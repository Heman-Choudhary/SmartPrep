// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ytUoNkd6WTZMBshAyNLXdnPFvAebEfs",
  authDomain: "smartprep-e3057.firebaseapp.com",
  projectId: "smartprep-e3057",
  storageBucket: "smartprep-e3057.firebasestorage.app",
  messagingSenderId: "580308417565",
  appId: "1:580308417565:web:51fbc1c2c0782e7cdb1af4",
  measurementId: "G-NP1L13E2GL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);