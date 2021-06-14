import React from 'react'
import SignIn from '../SignIn/SignIn';
import ChatRoom from '../ChatRoom/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function ChatSection() {
  const [user] = useAuthState(auth)

  return (
    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>
  )
}
