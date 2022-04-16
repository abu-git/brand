import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LandingGridItem from './LandingGridItem'

function LandingGrid({posts}) {
    //console.log(posts.data[0])

    return (
    <>
        <div className='mt-8 mb-8 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {posts.map((post) => {
                return <LandingGridItem post={post} key={post.id} />
            })}


        </div>
        <div className='flex justify-center mt-12'>
            <Link href="/posts" passHref>
            <div className='rounded-full py-2 px-3 uppercase font-bold cursor-pointer tracking-wider border-black hover:border-teal-700 dark:border-white border-2 dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:text-white hover:bg-teal-700 transition ease-out duration-500'>More Posts</div>
            </Link>
        </div>
    </>
  )
}

export default LandingGrid