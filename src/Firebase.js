// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugcWpVgCVetCIz85h8rnzXnUs4v33_bk",
  authDomain: "ruwini-fyp.firebaseapp.com",
  projectId: "ruwini-fyp",
  storageBucket: "ruwini-fyp.appspot.com",
  messagingSenderId: "296410941488",
  appId: "1:296410941488:web:5b0348fd95b55470e385f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);    
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);    
}

export function logout() {
    return signOut(auth);    
}

export function useAuth() {
    const [ currentUser, setCurrentUser] = useState();

    useEffect( () => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []) 

    return currentUser;
}