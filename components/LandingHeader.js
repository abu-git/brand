import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LandingHeader({post}) {
    /*  
        The Header info is retrieved from Strapi   
    */

    return (
    <Link href={`/posts/${post.slug}`}>
        <header className='w-full px-6 py-6'>
            <div className='flex justify-between bg-white rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer dark:bg-slate-800 dark:text-gray-100'>
                <div className="sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl lg:w-1/2 xl:w-1/2 2xl:w-9/12 font-extrabold flex items-center ...">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-indigo-500 to-fuchsia-700 px-5 py-3 self-center text-left  tracking-tighter">
                    {/* Header retrieved from database */}
                    {post.title}
                    </h1>
                </div>
                <div className='sm:w-1/2 lg:w-1/2 flex content-center justify-end'>
                    <Image 
                        src={`/${post.gridImage}`}
                        alt={post.title}
                        width={533}
                        height={533}
                        className='object-cover'
                    />
                </div>
                
            </div>
        </header>
    </Link>
  )
}

export default LandingHeader