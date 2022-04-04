import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Navigation() {
    //state is used to toggle navbar on mobile devices
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false)

    //state for close icon
    const [displayCloseIcon, setDisplayCloseIcon] = useState(false)
    
    const displayMenu = (e) => {
        e.preventDefault()
        if(displayMobileMenu === false){
            setDisplayMobileMenu(true)
            setDisplayCloseIcon(true)
        }else{
            setDisplayMobileMenu(false)
            setDisplayCloseIcon(false)
        }
    }

    return (
    <div className='font-body py-4 px-8 rounded shadow-md'>
        <nav className='flex justify-between'>
            {/* Logo  */}
            <Link href="/"><a className='w-1/4 text-xl font-bold px-3 bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-fuchsia-700'>Brand.</a></Link>
            {/* Page Links */}
            <ul className='hidden md:flex justify-between font-semibold items-center w-1/2 px-3'>
                <Link href="/"><li className='text-lg cursor-pointer'>Home</li></Link>
                <Link href="/posts"><li className='text-lg cursor-pointer'>Articles</li></Link>
                <Link href="/about"><li className='text-lg cursor-pointer'>About</li></Link>
                <li className='text-lg cursor-pointer'>Contact</li>
            </ul>
            {/* menu button ---hidden unless on small devices ---boolean used for close icon config */}
            {displayMobileMenu === false &&
            <button className="md:hidden" onClick={displayMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>}
            {/* -----------close icon display config---------- */}
            {displayCloseIcon === true &&
                <button onClick={displayMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            }
        </nav>

        {/*---- conditional rendering for mobile menu display ----*/}
        {displayMobileMenu === true && 
            <ul className='md:hidden text-right font-semibold py-5'>
                <Link href="/"><li className='py-1'>Home</li></Link>
                <Link href="/posts"><li className='py-1'>Articles</li></Link>
                <Link href="/about"><li className='py-1'>About</li></Link>
                <li className='py-1'>Contact</li>
            </ul>
        }
    </div>
  )
}

export default Navigation