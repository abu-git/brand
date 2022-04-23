import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PostsGridItem({post}) {
    //console.log(post.attributes)
    return (
        <Link href={`/posts/${post.attributes.slug}`} passHref>
            <div className='flex bg-white rounded drop-shadow-lg overflow-hidden md:rounded md:drop-shadow-md hover:drop-shadow-xl dark:bg-slate-800 mb-4 max-h-96 cursor-pointer'>
                <div className='w-1/3 brightness-75'> 
                    <Image
                        width={20}
                        height={20}
                        src={`/${post.attributes.gridImage}`}
                        layout='responsive'
                        alt={post.attributes.title}
                    />
                </div>
                
                <div className='w-2/3 flex items-center'>
                    <h3 className='w-fit text-sm md:text-2xl lg:text-3xl font-light p-2 items-center text-justify'>
                        <span className='text-md font-semibold text-black dark:text-white'>{post.attributes.title} </span>{post.attributes.description}
                    </h3>
                </div>
            </div>
        </Link>
  )
}

export default PostsGridItem