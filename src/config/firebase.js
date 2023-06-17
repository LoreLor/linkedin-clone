// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUfBDJaVSdCa8EdSI_T_Eya4Siiq3SWKE",
    authDomain: "linkedin-clone-617dc.firebaseapp.com",
    projectId: "linkedin-clone-617dc",
    storageBucket: "linkedin-clone-617dc.appspot.com",
    messagingSenderId: "996918325953",
    appId: "1:996918325953:web:b3e05498c8dd4e5a595a40"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
