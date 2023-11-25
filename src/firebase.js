//from firebase sdk
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, serverTimestamp, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyBo7VzdNLDiykNRT7j4uOde0gK_SpPPIFM",
  authDomain: "chatapp-d7dc1.firebaseapp.com",
  projectId: "chatapp-d7dc1",
  storageBucket: "chatapp-d7dc1.appspot.com",
  messagingSenderId: "114673445166",
  appId: "1:114673445166:web:e5b82a473482f3922bf2bf"
}

const app = initializeApp(config)

const auth = getAuth(app);
const firestore = getFirestore(app);
const firebaseFunctions = { firestore, auth, GoogleAuthProvider, signInWithPopup, collection, query, orderBy, serverTimestamp, addDoc }

export default firebaseFunctions