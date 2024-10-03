import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxVIidhsSgud0BsQiE9piYwgYdNz-5G48",
  authDomain: "online-shop-74be9.firebaseapp.com",
  projectId: "online-shop-74be9",
  storageBucket: "online-shop-74be9.appspot.com",
  messagingSenderId: "729513004006",
  appId: "1:729513004006:web:a2c4eb71f1bf21badea427",
  measurementId: "G-X9202CB8NB"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)