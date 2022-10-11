import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAePwg01aJ78VYrsEKgPgOePQurUI5syIQ",
  authDomain: "ditter-service.firebaseapp.com",
  projectId: "ditter-service",
  storageBucket: "ditter-service.appspot.com",
  messagingSenderId: "848271620966",
  appId: "1:848271620966:web:048f1130bf3959491da6a7",
  measurementId: "G-EHN0VB3NH7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
