import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChuI9MOvwCJ-nmHQ5pj4AEoq_QVfPQMmw",
    authDomain: "brewdog-4ce0b.firebaseapp.com",
    projectId: "brewdog-4ce0b",
    storageBucket: "brewdog-4ce0b.appspot.com",
    messagingSenderId: "352920766317",
    appId: "1:352920766317:web:08012b02c4f80afe02bc64",
    measurementId: "G-LPWL1CHV8G"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
