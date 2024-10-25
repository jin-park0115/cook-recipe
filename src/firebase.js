import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcRyt_2gJbmT-KPeypioHPmNIdwllttvY",
  authDomain: "cook-recipe-a2f38.firebaseapp.com",
  projectId: "cook-recipe-a2f38",
  storageBucket: "cook-recipe-a2f38.appspot.com",
  messagingSenderId: "385525784386",
  appId: "1:385525784386:web:82e995ff53ccddebb032db",
};
export const app = initializeApp(firebaseConfig);
