import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation2'
import Footer from '../../components/Footer'
import PostsGridItem from '../../components/PostsGridItem'
import axios from 'axios'
import { motion } from 'framer-motion'

// for deployed app
//const { NEXT_PUBLIC_STRAPI_API_URL } = process.env || "https://localhost:1337"

function Posts({posts}) {
  return (
    <div>
        <Head>
            <title>tunesketch | Articles</title>
            <meta name="description" content="A small media company established in 2022" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div 
            exit={{ opacity : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >  
            <div className='bg-white dark:bg-slate-900'>
                <Navigation />
                <section className='mt-14 px-6 lg:px-48 flex flex-col bg-white dark:bg-slate-900'>
                    <h2 className='mb-5 mt-3 p-2 md:text-xl text-md font-semibold text-black dark:text-white'>All Posts</h2>
                    {posts.data.map((post) => {
                        return<PostsGridItem post={post} key={post.id}/>
                    })}
                </section>
                <Footer />
            </div>
        </motion.div>
    </div>
    )
}

export default Posts

export async function getStaticProps() {
    //const postsResponse = await axios.get("http://localhost:1337/api/posts")//<---- for local machine
    const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`)
    //console.log("data array",postsResponse.data)
  
  
    return {
        props: {
            posts: postsResponse.data,
        },
    }
}
