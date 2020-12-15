import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

// var firebaseConfig = {
//     apiKey: "AIzaSyAkpspHYdTUdpnmkgGWLsor9MR-vxzWnHI",
//     authDomain: "managecoffee-65c23.firebaseapp.com",
//     databaseURL: "https://managecoffee-65c23.firebaseio.com",
//     projectId: "managecoffee-65c23",
//     storageBucket: "managecoffee-65c23.appspot.com",
//     messagingSenderId: "37849779963",
//     appId: "1:37849779963:web:87f60f3703e78af279ea5e",
//     measurementId: "G-V6HSNZJ4EW"
//   };
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

export default firebase.firestore();