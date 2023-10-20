import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBcAkPNtjqjnhaUa47uWsyz0G8TNKcMrLw",
  authDomain: "openin-54ec7.firebaseapp.com",
  projectId: "openin-54ec7",
  storageBucket: "openin-54ec7.appspot.com",
  messagingSenderId: "59797218737",
  appId: "1:59797218737:web:8b431f3b7678150804c990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider =new GoogleAuthProvider();

export default app;