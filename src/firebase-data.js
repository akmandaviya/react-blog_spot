import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lIlaK1wDbF8auD3YIA8AFS-RXhzxWhI",
  authDomain: "blog-2773d.firebaseapp.com",
  projectId: "blog-2773d",
  storageBucket: "blog-2773d.appspot.com",
  messagingSenderId: "271941940831",
  appId: "1:271941940831:web:13c5f92a934d2dc7d28dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//we are accessing out of class so exporting
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();