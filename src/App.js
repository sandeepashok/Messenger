import React, { useState, useRef, useEffect } from 'react';
import './App.css';
//from firebase sdk
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//from firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

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


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">

      <header>

        <h1>Messenger <SendRoundedIcon className='symbol' /></h1>

        <SignOut />

      </header>

      <section>

        {user ? <ChatRoom /> : <SignIn />}

      </section>

    </div>
  );
}

const SignIn = () => {

  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)

  }
  return (
    <div className='signin-container'>
      <div className='signin-page'>

        <img src='https://image.flaticon.com/icons/png/512/561/561241.png' alt='messenger-icon' className='brand-logo' />

        <h1>Messenger</h1>

        <h4>Sign In with Google and join the group chat to build your network and connections.</h4>

        <Button color="primary" variant='outlined' onClick={signInWithGoogle} className='signin-btn'>
          <img src='https://image.flaticon.com/icons/png/512/2702/2702602.png' alt='google-img' className='google-img' />
          <span className='btn-name'>signin</span>
        </Button>
      </div>
    </div>
  )
}

const SignOut = () => {
  return auth.currentUser && (

    <Button color="primary" onClick={() => auth.signOut()}>Sign Out</Button>

  )
}

const ChatRoom = () => {

  const messagesRef = firestore.collection('messages');

  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('')

  const dummy = useRef();

  const sendMessage = async (e) => {

    e.preventDefault();

    const { uid, photoURL } = auth.currentUser

    if (formValue !== '') {
      await messagesRef.add({

        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL

      })
      setFormValue('')

    }

  }

  useEffect(() => {
    dummy.current.scrollIntoView({ behaviour: 'smooth' });
  }, [messages])

  return (
    <>
      <main>

        {messages && messages.map(message => <ChatMessage key={message.id} message={message} />)}

        <div ref={dummy}></div>

      </main>

      <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message here..." />

        <Button color="primary" variant='contained' type='submit'> Send </Button>

      </form>
    </>
  )

}

const ChatMessage = ({ message }) => {

  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${messageClass}`}>

      <img alt='img' className='profile-pic' src={photoURL} />

      <p>{text}</p>

    </div>
  )

}

export default App;
