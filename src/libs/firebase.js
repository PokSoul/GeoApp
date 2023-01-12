import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhFb1q-qHs-wAkscvMH6oe-aUxbpbNlW8",
  authDomain: "platech-bdd.firebaseapp.com",
  databaseURL:
    "https://platech-bdd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "platech-bdd",
  storageBucket: "platech-bdd.appspot.com",
  messagingSenderId: "803202564105",
  appId: "1:803202564105:web:51470d3f3b0fb82130b8d8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider(app)
