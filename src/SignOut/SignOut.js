import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@material-ui/core/Button';

export default function SignOut() {
  const [user] = useAuthState(auth)
  return user && (

    <Button color="primary" onClick={() => auth.signOut()}>Sign Out</Button>

  )
}