import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@material-ui/core/Button';
import firebaseFunctions from '../firebase';

export default function SignOut() {
  const [user] = useAuthState(firebaseFunctions.auth)
  return user && (

    <Button color="primary" onClick={() => firebaseFunctions.auth.signOut()}>Sign Out</Button>

  )
}