import React from 'react'

function Footer() {
  return (
    <footer className="flex md:flex-col mt-8 mb-8 px-6 h-40 bg-white">
        <div className='text-center border-2 border-red-300 sm:w-full md:w-1/2'><h3 className='text-lg font-medium'>Designed by <span>Samuel G. Abu</span></h3></div>
        <div className='text-center border-2 border-blue-400 sm:w-full md:w-1/2'><span>Socials</span></div>
    </footer>
  )
}

export default Footer