import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/outline"

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)


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

    return (
        <div className='py-4 px-8 rounded shadow-md bg-white dark:bg-slate-900 dark:text-gray-100 fixed top-0 z-10 w-full'>
            <nav className='flex justify-between items-center'>
                {/* Logo  */}
                <Link href="/" passHref>
                    {/*<a className='w-1/3 md:w-1/4 sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 to-green-800'>
                        Brand.
                    </a>*/}
                    <div className='flex items-center w-2/5 md:w-1/4 cursor-pointer'>
                        <Image
                            src='/favicon/favicon-32x32.png'
                            width={35}
                            height={35}
                            alt='tunesketch logo'
                        />
                        <h3 className='sm:text-md md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-amber-200 to-yellow-900 pl-1'>tunesketch</h3>
                    </div>
                </Link>

                {/* theme changer button */}
                {renderThemeChanger()}

                {showSidebar === false && 
                    <svg onClick={() => setShowSidebar(!showSidebar)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                }
            </nav>

            <div className={`top-0 right-0 w-[380px] bg-slate-200 dark:bg-slate-800 dark:text-gray-100  p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSidebar(!showSidebar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                
                    <ul className='text-center text-2xl font-bold py-5'>
                    <Link href="/" passHref>
                        <li className='py-1 cursor-pointer'>
                            <a>Home</a>
                        </li>
                    </Link>
                    <Link href="/posts" passHref>
                        <li className='py-1 cursor-pointer'>
                            <a className='active'>Reviews</a>
                        </li>
                    </Link>
                    <Link href="/about" passHref>
                        <li className='py-1 cursor-pointer'>
                        <a>About</a>
                        </li>
                    </Link>
                        <li className='py-1 disabled text-slate-500'>Buy us coffee</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar