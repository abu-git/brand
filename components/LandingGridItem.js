import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LandingGridItem({post}) {

    
    return (
        <Link href={`/posts/${post.attributes.slug}`} passHref>
            <div className='flex flex-col cursor-pointer bg-white rounded drop-shadow-lg overflow-hidden md:rounded md:drop-shadow-md hover:drop-shadow-2xl dark:bg-slate-800 dark:text-gray-100'>
                <div className='relative'>
                    <Image 
                        width={433}
                        height={433}
                        alt={post.attributes.title}
                        src={`/${post.attributes.gridImage}`}
                        layout='responsive'
                        className='brightness-[0.4]'
                    />
                    <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>{post.attributes.title}</h3>
                </div>
                <span className='text-md lg:text-lg text-gray-700 dark:text-gray-100 mt-2 mb-2 text-justify px-3'>
                    {post.attributes.description}
                </span>
            </div>
        </Link>
    )
}

export default LandingGridItem