import Head from 'next/head'
import axios from 'axios'
import Navigation from '../components/Navigation2'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import Playlists from '../components/Playlists'
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
    <>
    <Head>
      <title>tunesketch | Creative Showcase</title>
      <meta name="description" content="A small media company established in 2022" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      {/* Social media meta tags */}
      <meta property="og:url" content="https://www.tunesketch.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content='We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community' key='title' />
      <meta property="og:description" content="tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art." />
      <meta property="og:image" content="/meta.jpg" />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="tunesketch.com"/>
      <meta property="twitter:url" content="https://www.tunesketch.com/"/>
      <meta name="twitter:title" content="We are a group of African creatives in different places in the world." key="title"/>
      <meta name="twitter:description" content="tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives."  />
      <meta name="twitter:image" content='meta.jpg'/>
    </Head>
    <motion.div 
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='bg-white dark:bg-slate-900'>
        <Navigation />
        <LandingHeader post={posts.data[5].attributes} />{/* -----------> Header post is chosen directly using its id */}
        <LandingGrid posts={gridPosts} />
        <Playlists />
        <Footer />
      </div>
    </motion.div>
    </>
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
