import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTVz6CWnZvjZEeg60vfOccAfiVt14OXzc",
    authDomain: "photo-moida.firebaseapp.com",
    projectId: "photo-moida",
    storageBucket: "photo-moida.appspot.com",
    messagingSenderId: "14135403172",
    appId: "1:14135403172:web:91f3717fcebc736422fc31",
    measurementId: "G-WTWBDBF46M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storag