import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-eca5a.firebaseapp.com",
  projectId: "reactchat-eca5a",
  storageBucket: "reactchat-eca5a.appspot.com",
  messagingSenderId: "730787070136",
  appId: "1:730787070136:web:85cd76b74856a569aeb44d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

