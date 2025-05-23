import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function LandingGridItem({post}) {

    
    return (
        <Link href={`/posts/${post.slug}`} passHref>
            <motion.div 
                initial={{ y: 30 ,opacity: 0.2 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className='flex flex-col cursor-pointer bg-white rounded-md drop-shadow-md overflow-hidden md:rounded-lg md:drop-shadow-md hover:drop-shadow-xl dark:bg-black dark:text-gray-100'>
                <div className='relative'>
                    <Image 
                        width={433}
                        height={433}
                        alt={post.title}
                        src={`/${post.gridImage}`}
                        layout='responsive'
                        className='brightness-[0.4]'
                    />
                    <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>{post.title}</h3>
                </div>
                <div className='flex flex-col justify-between'>
                    <span className='text-md lg:text-lg text-gray-700 dark:text-gray-100 mt-2 mb-2 text-justify px-3'>
                        {post.description}
                    </span>
                    <button className='flex items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-400 dark:text-gray-500'>
                        <h4>READ MORE</h4>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>
                
            </motion.div>
        </Link>
    )
}

export default LandingGridItem