import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0gqbLt97ucS02rhshVgtmemnSYPZ9i9E",
  authDomain: "prelaboral-435211.firebaseapp.com",
  projectId: "prelaboral-435211",
  storageBucket: "prelaboral-435211.firebasestorage.app",
  messagingSenderId: "347681603980",
  appId: "1:347681603980:web:39ba466d67ca92dd8c96a9",
  measurementId: "G-972PBSWGZ4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app); // Agrega esta línea para Firestore
export const storage = getStorage(app);