import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCNRDAmtp5wMJgFHPhoy-A6ke0d1hIzG54",
    authDomain: "insta-clone-nixlab.firebaseapp.com",
    projectId: "insta-clone-nixlab",
    storageBucket: "insta-clone-nixlab.appspot.com",
    messagingSenderId: "1083100623464",
    appId: "1:1083100623464:web:415cc2cfc0f3d05dffc1dd",
    measurementId: "G-PMEVQ6007C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };