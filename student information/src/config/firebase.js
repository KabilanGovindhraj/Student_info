import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBjqbv-ODoAj9IO702gxPjgMFmQA_thHk",
  authDomain: "student-info-53c9e.firebaseapp.com",
  projectId: "student-info-53c9e",
  storageBucket: "student-info-53c9e.appspot.com",
  messagingSenderId: "873020338971",
  appId: "1:873020338971:web:fecf81151d9d33827e59be",
  measurementId: "G-4D5PHN46WV"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

