import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5-ciVxC-7qnTxfPShFyv0zjR6Jo_Zbj0",
  authDomain: "carrosporto-d5b19.firebaseapp.com",
  projectId: "carrosporto-d5b19",
  storageBucket: "carrosporto-d5b19.firebasestorage.app",
  messagingSenderId: "147215438340",
  appId: "1:147215438340:web:1d202ca4ae384cce9f9b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}