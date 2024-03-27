// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAmxfAN8EnuvmFuPSnsBAxY5U0NDTJXbQc",
  authDomain: "myecom-4fc41.firebaseapp.com",
  projectId: "myecom-4fc41",
  storageBucket: "myecom-4fc41.appspot.com",
  messagingSenderId: "142414201039",
  appId: "1:142414201039:web:dffdecd93acc1c0f9937ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }