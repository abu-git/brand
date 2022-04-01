import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Navigation() {
    const [menu, setMenu] = useState(false)
    
    const displayMenu = (e) => {
        e.preventDefault()
        if(menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }

    return (
    <div className='bg-zinc-200 font-body py-4 px-8'>
        <nav className='flex justify-between'>
            <Link href="/"><a className='w-1/2 text-xl font-bold px-3'>Brand.</a></Link>

            <ul className='hidden md:flex justify-between font-semibold items-center w-1/2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button className="md:hidden" onClick={displayMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>

        {/*---- conditional rendering for mobile menu display ----*/}
        {menu === true && 
            <ul className='md:hidden text-right font-semibold py-5'>
                <li className='py-1'>Home</li>
                <li className='py-1'>About</li>
                <li className='py-1'>Contact</li>
            </ul>
        }
        
    </div>
  )
}

export default Navigation