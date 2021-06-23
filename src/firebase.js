
import firebase from "firebase"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCAgiYTZIaz0WN71_YTxIOESh2Cv5xVPQ",
  authDomain: "telegram-snippet.firebaseapp.com",
  projectId: "telegram-snippet",
  storageBucket: "telegram-snippet.appspot.com",
  messagingSenderId: "968476229286",
  appId: "1:968476229286:web:9c9b2a906a1eed7ad0fe67",
  measurementId: "G-DN6ZPR75R7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage(); //to manage multimedia uploads

export {auth, provider, storage}
export default db;


