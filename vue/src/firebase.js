import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import dotenv from 'dotenv'

dotenv.config({path:__dirname+'/.env'});
const myEnv = process.env
const firebaseConfig = {
    apiKey: myEnv.API_KEY,
    authDomain: myEnv.AUTH_DOMAIN,
    databaseURL: myEnv.DATABASE_URL,
    projectId: myEnv.PROJECT_ID,
    storageBucket: myEnv.STORAGE_BUCKET,
    messagingSenderId: myEnv.MESSAGING_SENDER_ID,
    appId: myEnv.APP_ID,
    measurementId: myEnv.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, authProvider);
