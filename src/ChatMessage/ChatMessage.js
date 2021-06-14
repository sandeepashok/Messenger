import React from 'react';
import { auth } from '../firebase';

export default function ChatMessage({ message }) {

  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${messageClass}`}>
      <img alt='img' className='profile-pic' src={photoURL} />
      <p>{text}</p>
    </div>
  )

}