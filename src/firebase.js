//from firebase sdk
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBo7VzdNLDiykNRT7j4uOde0gK_SpPPIFM",
  authDomain: "chatapp-d7dc1.firebaseapp.com",
  projectId: "chatapp-d7dc1",
  storageBucket: "chatapp-d7dc1.appspot.com",
  messagingSenderId: "114673445166",
  appId: "1:114673445166:web:e5b82a473482f3922bf2bf"
}

firebase.initializeApp(config)

const auth = firebase.auth();
const firestore = firebase.firestore();


export { firebase, firestore, auth }