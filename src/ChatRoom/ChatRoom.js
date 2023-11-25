import React, { useState, useRef, useEffect } from 'react';
import firebaseFunctions from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import Button from '@material-ui/core/Button';

export default function ChatRoom() {

  const { collection, firestore, orderBy, query, addDoc } = firebaseFunctions

  const messagesRef = collection(firestore, 'messages');
  // const query = messagesRef.orderBy('createdAt').limit(25);

  const myQuery = query(messagesRef, orderBy('createdAt'));

  const [messages] = useCollectionData(myQuery, { idField: 'id' });
  const [formValue, setFormValue] = useState('')

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = firebaseFunctions.auth.currentUser

    if (formValue !== '') {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: firebaseFunctions.serverTimestamp(),
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
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message here..." />
        <Button color="primary" variant='contained' type='submit'> Send </Button>
      </form>
    </>
  )

}