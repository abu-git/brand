import React from 'react'
import Image from 'next/image'

function PostsGridItem({post}) {
    return (
        <div className='flex bg-white dark:bg-slate-800 rounded overflow-hidden drop-shadow-lg hover:drop-shadow-xl mb-4 max-h-96 cursor-pointer'>
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
                <h3 className='w-fit text-xs md:text-2xl lg:text-3xl font-light p-3 items-center'>
                    <span className='text-md font-semibold'>{post.attributes.title}. </span>{post.attributes.description}
                </h3>
            </div>
        </div>
  )
}

export default PostsGridItem