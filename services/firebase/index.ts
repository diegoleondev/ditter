import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN6zCbgQDnX3mNagqJeZmKEUJ4t-Z7Zxw",
  authDomain: "ditter-diegoleon.firebaseapp.com",
  projectId: "ditter-diegoleon",
  storageBucket: "ditter-diegoleon.appspot.com",
  messagingSenderId: "663330749828",
  appId: "1:663330749828:web:0ebed8e4c142a1b0fc31d1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
