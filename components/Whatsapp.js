import React from 'react'
// Whatsapp widget (updated)
import { FloatingWhatsApp } from "react-floating-whatsapp"

function Whatsapp() {
  return (
      <div className="dark:text-black">
          <FloatingWhatsApp
              phoneNumber="2349064056786"
              accountName="Tunesketch Support (Sam)"
              avatar='/favicon/android-chrome-512x512.png'
              chatMessage="Hi there! 👋🏼 How can I help?"
              allowEsc
              allowClickAway
              notification
              notificationSound
          />
      </div>
  )
}

export default Whatsapp