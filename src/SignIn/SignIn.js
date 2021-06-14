import React from 'react';
import { firebase, auth } from '../firebase';
import Button from '@material-ui/core/Button';

export default function SignIn() {

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
