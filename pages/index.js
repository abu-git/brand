import Head from 'next/head'
import axios from 'axios'
import Navigation from '../components/Navigation'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Home({posts}) {
  //retreive main header data
  //console.log(posts.data)
  const [gridPosts, setGridPosts] = useState([])

  useEffect(() => {
    setGridPosts(posts.data.slice(1, 4))
  }, [posts])

  return (
    <div className='bg-white dark:bg-slate-900'>
      <Navigation />
      {/* Header post is chosen directly using its id */}
      <LandingHeader post={posts.data[0].attributes} />
      <LandingGrid posts={gridPosts} />
      <Footer />
    </div>
    
  )
}

export async function getStaticProps() {
  const postsResponse = await axios.get("http://localhost:1337/api/posts")
  //console.log("data array",postsResponse.data)


  return {
    props: {
      posts: postsResponse.data,
    },
  }
}
