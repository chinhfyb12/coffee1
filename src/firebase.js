import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyCnaXMvskw-hrfMbvq6plsLzofpZe5LV5w",
  authDomain: "coffee-1bd1e.firebaseapp.com",
  projectId: "coffee-1bd1e",
  storageBucket: "coffee-1bd1e.appspot.com",
  messagingSenderId: "700267674382",
  appId: "1:700267674382:web:41030f0714dcdba741355f",
  measurementId: "G-6S908N85WT"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth
}