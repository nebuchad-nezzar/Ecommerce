// import firebase from "firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyB2YpyLKRroJGmL97ewk4clmLax27E-PxY",

  authDomain: "amzn-ish-e1625.firebaseapp.com",

  projectId: "amzn-ish-e1625",

  storageBucket: "amzn-ish-e1625.appspot.com",

  messagingSenderId: "30531473243",

  appId: "1:30531473243:web:d5a9b8981a70d830af147e"

};


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db =  app.firestore();

  export default db;