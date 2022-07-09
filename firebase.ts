// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpHDaAR8gLkiy5Ca6lXR0VL7hL1NK98qU',
  authDomain: 'netflix-clone-37407.firebaseapp.com',
  projectId: 'netflix-clone-37407',
  storageBucket: 'netflix-clone-37407.appspot.com',
  messagingSenderId: '688703327756',
  appId: '1:688703327756:web:a3df6fca38e697eea0e829',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
