import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZmE6pgzGL-2-87C1J9hySkvnPqjoEk2I",
  authDomain: "rk-infotech-44325.firebaseapp.com",
  projectId: "rk-infotech-44325",
  storageBucket: "rk-infotech-44325.firebasestorage.app",
  messagingSenderId: "368826254254",
  appId: "1:368826254254:web:c20aa85d26284c5a883e3f",
  measurementId: "G-SS3FMQ8H52"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
