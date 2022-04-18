import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LandingGridItem({post}) {
    
    return (
        <Link href={`/posts/${post.attributes.slug}`} passHref>
            <div className='flex flex-col cursor-pointer bg-white dark:bg-slate-800 dark:text-gray-100 rounded overflow-hidden drop-shadow-lg hover:drop-shadow-2xl'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt={post.attributes.title}
                            src={`/${post.attributes.gridImage}`}
                            layout='responsive'
                            className='brightness-50'
                        />
                        <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>{post.attributes.title}</h3>
                    </div>
                    <span className='text-md lg:text-lg text-gray-700 dark:text-gray-100 mt-2 mb-2 text-justify px-3'>
                        {post.attributes.description}
                    </span>
                    <span className='flex justify-end'>
                        <h5 className='px-3 text-xs text-gray-500 dark:text-gray-100 self-center'>April 02, 2022</h5>
                        <div className='px-3 content-center'>
                            <Image 
                                width={20}
                                height={20}
                                alt="author"
                                src="/sam-modified.png"
                            />
                        </div>
                    </span>
            </div>
        </Link>
    )
}

export default LandingGridItem