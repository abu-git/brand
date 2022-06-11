import Head from 'next/head'
import { v2 as cloudinary } from 'cloudinary'
import axios from 'axios'
import Navigation from '../components/Navigation2'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import Playlists from '../components/Playlists'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'


export default function Home({posts, ogImageUrl }) {
  //retreive main header grid data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(6, 9))
  }, [posts])

  return (
    <Layout>
      <Head>
        <title>tunesketch | Creative Showcase</title>
        <meta name="description" content='tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art.' />
        <meta property='og:title' content='We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community'/>
        <meta property="og:description" content='tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art.' />
        <meta property='og:image' content={ogImageUrl} />
        <meta property='og:image:secure_url' content={ogImageUrl} />
        {/*<meta property='og:image:width' content="1012" />
        <meta property='og:image:height' content="506" />*/}
        <meta property="og:url" content="https://www.tunesketch.com" />
        <meta property="og:type" content="website" />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community' />
        <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1653397513/meta_ieuchp.jpg' />
        <meta name="twitter:creator" content="@reachmhp"/>
        <meta name="twitter:creator" content="@reachmhp" />
      </Head>
      
      <motion.div 
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='bg-white dark:bg-slate-900'>
          {/*<Navigation />*/}
          <Sidebar />
          <LandingHeader post={posts.data[1].attributes} />{/* -----------> Header post is chosen directly using its id */}
          <LandingGrid posts={gridPosts} />
          <Playlists />
          <Footer />
        </div>
      </motion.div>
    </Layout>
  )
}

export async function getServerSideProps() {
  //const postsResponse = await axios.get("http://localhost:1337/api/posts") //<---- for local machine
  const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`).then().catch(err => console.log(err))
  //console.log("data array",postsResponse.data)

  cloudinary.config({
    cloud_name: 'dbqn6vejg'
  })

  const cloudinaryUrl = cloudinary.url('meta_ieuchp', {
    width: 1012,
    height: 506,
    /*transformation: [
      {
        fetch_format: 'auto',
        quality: 'auto'
      }
    ]*/
  })

  return {
    props: {
      posts: postsResponse.data,
      //metaPost: postsResponse.data.data[0],
      ogImageUrl: cloudinaryUrl,
    },
  }
}
