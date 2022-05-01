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


export default function Home({posts, metaPost, ogImageUrl }) {
  //retreive main header grid data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(1, 4))
  }, [posts])

  return (
    <Layout>
      <Head>
        <title>tunesketch | Creative Showcase</title>
        <meta name="description" content={metaPost.attributes.description} />
        <meta property='og:title' content={metaPost.attributes.title} />
        <meta property='og:image' content={ogImageUrl} />
        <meta property='og:image:secure_url' content={ogImageUrl} />
        <meta property='og:image:width' content="1012" />
        <meta property='og:image:height' content="506" />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={metaPost.attributes.title} />
        <meta property='twitter:image' content={ogImageUrl} />
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

  const cloudinaryUrl = cloudinary.url('tunesketchHomeMeta_pfvmkf', {
    width: 1012,
    height: 506,
    transformation: [
      {
        fetch_format: 'auto',
        quality: 'auto'
      }
    ]
  })

  return {
    props: {
      posts: postsResponse.data,
      metaPost: postsResponse.data.data[5],
      ogImageUrl: cloudinaryUrl,
    },
  }
}
