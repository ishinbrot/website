import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0P3OsbgZDAmTd2Jk_7CDNi7FMU0JShmo",
    authDomain: "website-e9b56.firebaseapp.com",
    databaseURL: "https://website-e9b56.firebaseio.com",
    projectId: "website-e9b56",
    storageBucket: "website-e9b56.appspot.com",
    messagingSenderId: "819190539629",
    appId: "1:819190539629:web:961709cb62a6e6465fe664",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();