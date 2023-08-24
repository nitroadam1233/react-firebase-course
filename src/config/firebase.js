// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD26iAGXRNqh2CW-7oz5MjBEQQ9ls8iUf4",
  authDomain: "fir-course-2b04b.firebaseapp.com",
  projectId: "fir-course-2b04b",
  storageBucket: "fir-course-2b04b.appspot.com",
  messagingSenderId: "642596179465",
  appId: "1:642596179465:web:83d8e785a45d15036332d8",
  measurementId: "G-282SBBCZ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);