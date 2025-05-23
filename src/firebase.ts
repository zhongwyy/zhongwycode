import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "zhongwycode.firebasestorage.app",
  messagingSenderId: "635313280532",
  appId: "1:635313280532:web:03e4ff557440348d487901",
  measurementId: "G-5GSWCLTWED"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // <- db экспортируется
export const storage = getStorage(app);

