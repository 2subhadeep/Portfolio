import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getDocs } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15cY7yrh7mHvwL2B1B-KJZ6EHD9p5NBs",
  authDomain: "portfolio-600.firebaseapp.com",
  projectId: "portfolio-600",
  storageBucket: "portfolio-600.firebasestorage.app",
  messagingSenderId: "938823402461",
  appId: "1:938823402461:web:e619801fcf0f4048afac34",
  measurementId: "G-E1WSGXDDTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, analytics };