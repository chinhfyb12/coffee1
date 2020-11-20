import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyAkpspHYdTUdpnmkgGWLsor9MR-vxzWnHI",
    authDomain: "managecoffee-65c23.firebaseapp.com",
    databaseURL: "https://managecoffee-65c23.firebaseio.com",
    projectId: "managecoffee-65c23",
    storageBucket: "managecoffee-65c23.appspot.com",
    messagingSenderId: "37849779963",
    appId: "1:37849779963:web:87f60f3703e78af279ea5e",
    measurementId: "G-V6HSNZJ4EW"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.database();