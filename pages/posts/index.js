import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import PostsGridItem from '../../components/PostsGridItem'
import axios from 'axios'
import { motion } from 'framer-motion'

import dbConnect from '../../lib/dbConnect'
import Blog from '../../models/Blog'

//whatsap widget setup
import Whatsapp from '../../components/Whatsapp'

// for deployed app
//const { NEXT_PUBLIC_STRAPI_API_URL } = process.env || "https://localhost:1337"

function Posts({posts, page, count}) {

    const router = useRouter()

    const lastPage = Math.ceil(count/11)

    /*sorting but not used if sort doesnt affect post object
    ascending a.id -b.id
    let temp = posts.data
    let temp2 = temp.sort((a , b) => {
        return b.id - a.id//descending order
    })*/
    //console.log(temp2)
    
    return (
    <Layout>
        <Head>
            <title>tunesketch | Articles</title>
            


            {/* Social media meta tags */}
            <meta property="og:url" content="https://tunesketch.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="These are our short articles and reviews of some dope african music" key="ogpoststitle" />
            <meta property="og:description" content="tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent and worldwide. We aim to cover a large spectrum of music genres and art." key="ogpostsdesc" />
            <meta property="og:image" content="/meta.jpg" key="ogpostsimg" />

            <meta name="twitter:card" content="summary_large_image" key="twcard"></meta>
            <meta name="twitter:creator" content="@reachmhp"/>
            <meta name="twitter:creator" content="@reachmhp" />
            <meta property="twitter:domain" content="tunesketch.com"/>
            <meta property="twitter:url" content="https://www.tunesketch.com/"/>
            <meta name="twitter:title" content="These are our short articles and reviews of some dope african music" key="twpoststitle" />
            <meta name="twitter:description" content="tunesketch is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent. We aim to cover a large spectrum of music genres and art." key="twpostsdesc"  />
            <meta name="twitter:image" content="/meta.jpg" key="twpostsimg"/>

        </Head>
        <motion.div 
            exit={{ opacity : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >  
            <div className='bg-white dark:bg-slate-900'>
                <Sidebar />
                <section className='mt-14 mb-24 px-6 lg:px-64 flex flex-col bg-white dark:bg-slate-900'>
                    <h2 className='mb-5 mt-3 p-2 md:text-xl text-md font-semibold text-black dark:text-white'>All Reviews - pg.{page}</h2>
                    <nav className='flex justify-between mb-5'>
                        {page > 1 &&
                            <button disabled={page <= 1} onClick={() => router.push(`/posts?page=${page - 1}`)} className='h-10 px-5 transition-colors duration-150 bg-white dark:bg-slate-900 rounded-l-lg focus:shadow-outline hover:bg-sky-900 dark:hover:bg-sky-900 text-black dark:text-white hover:text-white flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                <h5 className='text-md'>Previous Page</h5>
                            </button>
                        }

                        {page != lastPage &&
                            <button disabled={page >= lastPage} onClick={() => router.push(`/posts?page=${page + 1}`)} className='h-10 px-5 transition-colors duration-150 bg-white dark:bg-slate-900 rounded-r-lg focus:shadow-outline hover:bg-sky-900 dark:hover:bg-sky-900 text-black dark:text-white hover:text-white flex items-center'>
                                <h5 className='text-md pb-1'>Next Page</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        }
                        
                        
                    </nav>
                    {posts.map((post) => {
                        return<PostsGridItem post={post} key={post._id}/>
                    })}
                    <nav className='flex justify-between mb-5'>
                        {page > 1 &&
                            <button disabled={page <= 1} onClick={() => router.push(`/posts?page=${page - 1}`)} className='h-10 px-5 transition-colors duration-150 bg-white dark:bg-slate-900 rounded-l-lg focus:shadow-outline hover:bg-sky-900 dark:hover:bg-sky-900 text-black dark:text-white hover:text-white flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                <h5 className='text-md'>Previous Page</h5>
                            </button>
                        }

                        {page != lastPage &&
                            <button disabled={page >= lastPage} onClick={() => router.push(`/posts?page=${page + 1}`)} className='h-10 px-5 transition-colors duration-150 bg-white dark:bg-slate-900 rounded-r-lg focus:shadow-outline hover:bg-sky-900 dark:hover:bg-sky-900 text-black dark:text-white hover:text-white flex items-center'>
                            <h5 className='text-md pb-1'>Next Page</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        }
                    </nav>
                </section>
                <Footer />
                <Whatsapp />
            </div>
        </motion.div>
    </Layout>
    )
}

export default Posts

export async function getServerSideProps({ query: {page = 1}}) {
    await dbConnect()

    const options = {
        page: page,
        limit: 11
    }

    const result = await Blog.paginate({}, options)
    //console.log(result)
    const blogs = result.docs.map((doc) => {
        const blog = doc.toObject()
        blog._id = blog._id.toString()
        blog.date = blog.date.toString()
        return blog
    })

    //const start = +page === 1 ? 0 : (+page - 1) * 9
    //console.log("start", start)

    //const postsResponse = await axios.get("http://localhost:1337/api/posts")//<---- for local machine
    //const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`)
    /*const postsResponse = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?pagination[start]=${start}&pagination[limit]=7`)*/
    //console.log("count is: ", postsResponse.data.meta.pagination.total)
    //console.log("page is: ", page)

    //postsResponse.data.data.sort()

    //console.log(postsResponse.data)

    return {
        props: {
            posts: blogs,
            page: parseInt(result.page),
            count: parseInt(result.totalDocs)
        },
    }
}
