import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC15cY7yrh7mHvwL2B1B-KJZ6EHD9p5NBs",
    authDomain: "portfolio-600.firebaseapp.com",
    projectId: "portfolio-600",
    storageBucket: "portfolio-600.firebasestorage.app",
    messagingSenderId: "938823402461",
    appId: "1:938823402461:web:e619801fcf0f4048afac34",
    measurementId: "G-E1WSGXDDTT"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };