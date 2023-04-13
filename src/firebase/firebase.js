// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ancorenotes-29b02.firebaseapp.com",
  projectId: "ancorenotes-29b02",
  storageBucket: "ancorenotes-29b02.appspot.com",
  messagingSenderId: "1093621414370",
  appId: "1:1093621414370:web:ee96019eb8b52b3c98a1bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
