// const hola = process.env.REACT_APP_FIREBASE_API_KEY;
// console.log("hola", hola);
// import firebase from "firebase/app";
// import "dotenv/config";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  // apiKey: "AIzaSyAl5GqF8RNOPYzwzfm_QI3z1fVhHk5fcxE",
  // authDomain: "littlessentials-dev.firebaseapp.com",
  // projectId: "littlessentials-dev",
  // storageBucket: "littlessentials-dev.appspot.com",
  // messagingSenderId: "839683234168",
  // appId: "1:839683234168:web:bdeec696637f4a30b1108d",
  // measurementId: "G-Z39KDM5EC6",
});

// export const auth = app.auth();
export default app;
export const auth = getAuth(app);
