// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOpmT9m2I42U-ltQfVbDP3s-Dx36-xSvQ",
  authDomain: "minishop-3.firebaseapp.com",
  projectId: "minishop-3",
  storageBucket: "minishop-3.appspot.com", // Fixed this!
  messagingSenderId: "215272396357",
  appId: "1:215272396357:web:10fd190e5a67136d4cb52c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
