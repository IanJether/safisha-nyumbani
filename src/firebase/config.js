import { initializeApp } from 'firebase/app';
import {
    getFirestore,
  } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDDOnqe1w8qVT0lYf6kGyvICDS8skDR2dk",
    authDomain: "safisha-services.firebaseapp.com",
    projectId: "safisha-services",
    storageBucket: "safisha-services.appspot.com",
    messagingSenderId: "153959375799",
    appId: "1:153959375799:web:1cb0198c40e2333c6ffe32"
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services 
const db = getFirestore();


export { db }