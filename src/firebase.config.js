import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78_10DdvG3HBJmTmdYpRUTtlxi2IsZyg",
  authDomain: "house-marketplace-app-4ab92.firebaseapp.com",
  projectId: "house-marketplace-app-4ab92",
  storageBucket: "house-marketplace-app-4ab92.appspot.com",
  messagingSenderId: "171868730817",
  appId: "1:171868730817:web:576aa2aee326123e476b40"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()