import React from 'react'
import SignIn from '../SignIn/SignIn';
import ChatRoom from '../ChatRoom/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseFunctions from '../firebase';

export default function ChatSection() {
  const [user] = useAuthState(firebaseFunctions.auth)

  return (
    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>
  )
}
