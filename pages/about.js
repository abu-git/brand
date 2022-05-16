import Head from 'next/head'
import React from 'react'
import Navigation from '../components/Navigation2'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <section className='bg-white dark:bg-slate-900'>
        <Head>
          <title>tunesketch | About Us</title>
          
          {/*<link rel="manifest" href="/favicon/favicon/site.webmanifest"/>*/}

          {/* Social media meta tags */}
          <meta property="og:url" content="https://tunesketch.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="tunesketch | We are a group of African creatives in different places in the world with a common goal." key="ogabouttitle" />
          <meta property="og:description" content="tunesketch | We are a group of African creatives in different places in the world with a common goal. We aim to cover a large spectrum of music genres and art. We want to connect the thriving diasporan with the nerdy and resourceful African child." key="ogaboutdesc" />
          <meta property="og:image" content="https://res.cloudinary.com/dbqn6vejg/image/upload/v1651425549/tunesketchHomeMeta_lmg96b.png" key="ogaboutimg" />

          <meta name="twitter:card" content="summary_large_image" key="twaboutcard"/>
          <meta name="twitter:creator" content="@reachmhp"/>
          <meta name="twitter:creator" content="@reachmhp" />
          <meta property="twitter:domain" content="tunesketch.com"/>
          <meta property="twitter:url" content="https://www.tunesketch.com/"/>
          <meta name="twitter:title" content="tunesketch | We are a group of African creatives in different places in the world with a common goal" key="twabouttitle" />
          <meta name="twitter:description" content="tunesketch | We are a group of African creatives in different places in the world with a common goal. We aim to cover a large spectrum of music genres and art. We want to connect the thriving diasporan with the nerdy and resourceful African child." key="twaboutdesc" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dbqn6vejg/image/upload/v1651425549/tunesketchHomeMeta_lmg96b.png" key="twaboutimg" />
        </Head>
        <motion.div 
          exit={{ opacity:0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='bg-white dark:bg-slate-900'>
              <Navigation />
              <section className='bg-white dark:bg-slate-900 md:mx-20 md:mb-56 lg:mb-56 lg:mx-48 mt-14 px-6 grid grid-cols-1 md:grid-cols-2 '>
                  {/*--- Left Div on big screens Top Div on small screens ---*/}
                  <div className='dark:bg-slate-900 md:text-5xl lg:text-6xl text-4xl font-bold text-right text-black dark:text-white mt-4 pr-5 pb-5 '>
                      <h1>We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community. This is one of our contributions.</h1>
                  </div>
                  {/*--- Right Div on big screens Bottom Div on small screens ---*/}
                  <div className='bg-white dark:bg-slate-800 rounded drop-shadow-lg mt-4 px-3 py-5 items-center '>
                      <h4 className='text-2xl font-light text-black dark:text-white'><span className='text-3xl font-semibold'>tunesketch</span> is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art. We want to connect the thriving diasporan with the nerdy and resourceful African child.</h4>
                      <br />

                      <h4 className='text-2xl font-light'>Hopefully, we can give voice to the unheard and inspire the young one. Stay with us on this journey.</h4>
                  </div>
              </section>
              <Footer />
          </div>
        </motion.div>
      </section>
      </Layout>
  )
}

export default About