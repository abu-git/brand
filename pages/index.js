import Head from 'next/head'
import axios from 'axios'
import Navigation from '../components/Navigation'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// for deployed app
//const { NEXT_PUBLIC_STRAPI_API_URL } = process.env 

export default function Home({posts}) {
  //retreive main header grid data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(1, 4))
  }, [posts])

  return (
    <motion.div 
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <div className='bg-white dark:bg-slate-900'>
        <Navigation />
        <LandingHeader post={posts.data[0].attributes} />{/* -----------> Header post is chosen directly using its id */}
        <LandingGrid posts={gridPosts} />
        <Footer />
      </div>
    </motion.div>
    
  )
}

export async function getStaticProps() {
  //const postsResponse = await axios.get("http://localhost:1337/api/posts") //<---- for local machine
  const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`)
  //console.log("data array",postsResponse.data)


  return {
    props: {
      posts: postsResponse.data,
    },
  }
}
