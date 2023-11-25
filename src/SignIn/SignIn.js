import React from 'react';
import firebaseFunctions from '../firebase';
import Button from '@material-ui/core/Button';

export default function SignIn() {

  const signInWithGoogle = () => {

    const provider = new firebaseFunctions.GoogleAuthProvider();

    firebaseFunctions.signInWithPopup(firebaseFunctions.auth, provider)

  }

  return (
    <div className='signin-container'>

      <div className='signin-page'>

        <img src='/chat.png' alt='messenger-icon' className='brand-logo' />


        <h1>Messenger</h1>
        <h4>Sign In with Google and join the group chat to build your network and connections.</h4>

        <Button color="primary" variant='outlined' onClick={signInWithGoogle} className='signin-btn'>
          <img src='/google.png' alt='google-img' className='google-img' />
          <span className='btn-name'>signin</span>
        </Button>

      </div>

    </div>
  )
}
