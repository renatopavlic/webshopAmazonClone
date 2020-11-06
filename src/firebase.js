import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrEtnvF0w9jG6AK6Ly2y79KfLtvx7d3GI",
  authDomain: "clone-41fc5.firebaseapp.com",
  databaseURL: "https://clone-41fc5.firebaseio.com",
  projectId: "clone-41fc5",
  storageBucket: "clone-41fc5.appspot.com",
  messagingSenderId: "769232723412",
  appId: "1:769232723412:web:1fc3f81358f4fb4ecd0a41",
  measurementId: "G-31WL7ZLTXC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };