import Head from 'next/head'
import axios from 'axios'
import Navigation from '../components/Navigation2'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import Playlists from '../components/Playlists'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import Meta from '../components/Meta'


export default function Home({posts, metaData }) {
  //retreive main header grid data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(1, 4))
  }, [posts])

  const metaDesc = metaData.description
  const metaTitle = metaData.title
  return (
    <>
        <Meta title={metaTitle} description={metaDesc}  />
        <p>head issues</p>
    </>
  )
}

export async function getServerSideProps() {
  //const postsResponse = await axios.get("http://localhost:1337/api/posts") //<---- for local machine
  const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`).then().catch(err => console.log(err))
  //console.log("data array",postsResponse.data)


  return {
    props: {
      posts: postsResponse.data,
      metaData: {
        title: 'We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community',
        description: 'tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art.',
        image: '/meta.jpg',
        twcard: 'summary_large_image',
        url: 'https://www.tunesketch.com',
        domain: 'tunesketch.com',
        type: 'website'
      }
      
    },
  }
}
