import React from 'react'
import SignOut from '../SignOut/SignOut';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

export default function Nav() {
  return (
    <header>
      <h1>Messenger <SendRoundedIcon className='symbol' /></h1>
      <SignOut />
    </header>
  )
}
