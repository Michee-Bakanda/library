import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCO2UTA6aqHcXoEEJvM_RWeCuIrlS1C4E",
  authDomain: "book-app-f60b7.firebaseapp.com",
  projectId: "book-app-f60b7",
  storageBucket: "book-app-f60b7.appspot.com",
  messagingSenderId: "743186792332",
  appId: "1:743186792332:web:9006d447b81940758b20a9",
  measurementId: "G-JZCHJVX4L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app)
