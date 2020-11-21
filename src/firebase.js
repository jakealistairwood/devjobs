import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZWZaCQ5ijjFYCDBomFBGUwWl6Rcevuig",
    authDomain: "devjobs-1f9cd.firebaseapp.com",
    databaseURL: "https://devjobs-1f9cd.firebaseio.com",
    projectId: "devjobs-1f9cd",
    storageBucket: "devjobs-1f9cd.appspot.com",
    messagingSenderId: "938881654058",
    appId: "1:938881654058:web:6abeadd3d84408c05bd253",
    measurementId: "G-Q659V1M6L3"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;