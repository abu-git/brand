import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "@heroicons/react/outline"



function Navigation() {
    //used for active links
    const router = useRouter()

    //dark theme config
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if(!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if(currentTheme === 'dark'){
            return(
                <SunIcon className="w-7 h-7 hover:fill-yellow-500" role="button" onClick={() => setTheme('light')} />
            )
        }
        else {
            return(
                <MoonIcon className="w-7 h-7 hover:fill-teal-100" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

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
    <div className='font-body py-4 px-8 rounded shadow-md bg-white dark:bg-slate-900 dark:text-gray-100 fixed top-0 z-10 w-full'>
        <nav className='flex justify-between items-center'>
            {/* Logo  */}
            <Link href="/">
                {/*<a className='w-1/3 md:w-1/4 sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 to-green-800'>
                    Brand.
                </a>*/}
                <div className='flex items-center w-1/2 md:w-1/4 cursor-pointer'>
                    <Image
                        src='/logo_1.png'
                        width={35}
                        height={35}
                        alt='Africa Interacts Logo'
                    />
                    <h3 className='sm:text-md md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 to-green-800'>Kulture Launders</h3>
                </div>
            </Link>
            
            


            {/* Page Links */}
            <ul className='hidden md:flex justify-between font-semibold items-center w-1/2 px-3'>
                <Link href="/" passHref>
                    <li className='text-lg cursor-pointer'>
                        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                    </li>
                </Link>
                <Link href="/posts" passHref>
                    <li className='text-lg cursor-pointer'>
                        <a className={router.pathname == "/posts" ? "active" : ""}>Articles</a>
                    </li>
                </Link>
                <Link href="/about" passHref>
                    <li className='text-lg cursor-pointer'>
                        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
                    </li>
                </Link>
                <li className='text-lg disabled text-slate-500'>Contact</li>
            </ul>

            {/* theme changer button */}
            {renderThemeChanger()}

            
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
                <Link href="/" passHref>
                    <li className='py-1 cursor-pointer'>
                        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                    </li>
                </Link>
                <Link href="/posts" passHref>
                    <li className='py-1 cursor-pointer'>
                        <a className={router.pathname == "/posts" ? "active" : ""}>Articles</a>
                    </li>
                </Link>
                <Link href="/about" passHref>
                    <li className='py-1 cursor-pointer'>
                    <a className={router.pathname == "/about" ? "active" : ""}>About</a>
                    </li>
                </Link>
                <li className='py-1 disabled text-slate-500'>Contact</li>
            </ul>
        }
    </div>
  )
}

export default Navigation