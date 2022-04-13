import Head from 'next/head'
import axios from 'axios'
import Navigation from '../components/Navigation'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


export default function Home({posts}) {
  //retreive main header grid data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(1, 4))
  }, [posts])

  return (
    <div>
    <Head>
      <title>Brand. | Creative Showcase</title>
      <meta name="description" content="A small media company established in 2022" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
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
    </div>
  )
}

export async function getStaticProps() {
  //const postsResponse = await axios.get("http://localhost:1337/api/posts") //<---- for local machine
  const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`).then().catch(err => console.log(err))
  //console.log("data array",postsResponse.data)


  return {
    props: {
      posts: postsResponse.data,
    },
  }
}
