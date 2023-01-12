import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

import React from 'react'

function Whatsapp() {
  return (
    <div className='dark:text-black'>
        <WhatsAppWidget phoneNumber="27832459000" message="Hello! 👋🏼 What can we do for you?" />
    </div>
    
  )
}

export default Whatsapp