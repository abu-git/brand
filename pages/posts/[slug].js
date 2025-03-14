import Image from "next/image"
//import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { v2 as cloudinary } from 'cloudinary'
import Layout from "../../components/Layout"
import Sidebar from "../../components/Sidebar2"
import Footer from "../../components/Footer"
import axios from 'axios'
import { motion } from 'framer-motion'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'


import dbConnect from '../../lib/dbConnect'
import Blog from '../../models/Blog'

//whatsap widget setup
import Whatsapp from "../../components/Whatsapp"
import AndroidPromo from "../../components/AndroidPromo"


const Post = ({post, ogImageUrl}) => {

    const router = useRouter()
    const thePath = router.asPath
    const theQuery = router.query
    //console.log(router.query)
    const slugURL = "/posts/" + post.slug
    //console.log("path", thePath)
    //console.log("slug url", slugURL)

    //router.asPath and router.query comparism is used for continues functionality of go back arrow on [slug]
    //thePath works for desktop devices and theQuery specifically works for mobile devices
    //theQuery might also work for desktop
    const onBackClick = (e) => {
        e.preventDefault()
        if(thePath === slugURL){
            router.back()
        }if(theQuery !== ''){
            router.push('/')
        }else{
            router.push('/')
        }
    }

    return(
        <Layout>
            <Head>
                <title>tunesketch | {post.title}</title>
                <meta name="description" content={post.description} />
                

                {/* Social media meta tags */}
                
                <meta property="og:type" content="website" />
                <meta property="og:title" content={post.title}  />
                <meta property="og:description" content={post.description}  />
                <meta property="og:image" content={ogImageUrl}  />
                <meta property="og:image:secure_url" content={ogImageUrl} />
                <meta property="og:image:width" content="2024" />
                <meta property="og:image:height" content="1012" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@reachmhp"/>
                <meta name="twitter:creator" content="@reachmhp" />
                <meta property="twitter:domain" content="tunesketch.com"/>
                
                <meta name="twitter:title" content={post.title}   />
                <meta name="twitter:description" content={post.description}  />
                <meta name="twitter:image" content={ogImageUrl} />
            </Head>
        <div>
            <div className='bg-slate-100 dark:bg-zinc-900'>
                <Sidebar />
                <div className="flex items-center mt-5 ml-6">
                    {/*<Link href="/posts" passHref>*/}
                    <button onClick={onBackClick} className="mt-14 pl-5 cursor-pointer text-sm mr-4 py-3 px-4 rounded-full border-0 text-black dark:text-white hover:text-white hover:bg-amber-800 dark:hover:bg-amber-900">
                        <ArrowNarrowLeftIcon className="h-7 w-7" />
                    </button>
                    {/*</Link>*/}
                </div>
                <section className="flex flex-col mt-2 mx-auto">
                        <div className="mx-8 lg:mx-16">
                            <motion.h3 
                                initial={{ y:30 , opacity: 0 }}
                                whileInView={{ y:0, opacity: 1}}
                                transition={{ delay: 1.3 }}
                                className="text-2xl lg:text-5xl font-extrabold text-black dark:text-white text-center mb-5 px-8">{post.title}</motion.h3>
                            <motion.h3 
                                initial={{ y:-30 , opacity: 0 }}
                                whileInView={{ y:0, opacity: 1}}
                                transition={{ delay: 1.3 }}
                                className="text-lg lg:text-2xl font-light text-black dark:text-white text-center mb-5 px-8">published: {(new Date(post.date)).toDateString()}</motion.h3>
                        </div>
                        <div className="bg-white dark:bg-black rounded-md drop-shadow-lg mx-6 md:mx-24 lg:mx-60 px-4 py-5 text-center">
                            <motion.div
                                initial={{ y:30, opacity: 0}}
                                whileInView={{ y: 0, opacity: 1}}
                                transition={{ delay: 1.5 }}
                            >
                                <Image 
                                    src={`/${post.gridImage}`}
                                    width={300}
                                    height={300}
                                    alt={post.title}
                                />
                            </motion.div>
                            
                            <motion.p 
                                initial={{ y:-30, opacity: 0}}
                                whileInView={{ y: 0, opacity: 1}}
                                transition={{ delay: 1.5 }}
                                className="text-xl text-black dark:text-white lg:text-3xl text-justify pt-3">{post.content}</motion.p>
                        </div>
                    
                </section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3  mt-5 md:mb-32 mx-6 md:mx-24 lg:mx-60">
                    <a target="_blank" href={post.youtube} rel="noreferrer">
                        <motion.div 
                            initial={{ y:-30, opacity: 0}}
                            whileInView={{ y: 0, opacity: 1}}
                            transition={{ delay: 1.6 }}
                            className="bg-white dark:bg-black py-5 px-3 rounded-md shadow-md hover:shadow-lg flex justify-center cursor-pointer">
                            <h5 className="text-md font-thin text-black dark:text-white">YouTube</h5>
                            <svg className="ml-2 w-6 h-6 fill-red-600" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </motion.div>
                    </a>

                    <a target="_blank" href={post.spotify} rel="noreferrer">
                        <motion.div 
                            initial={{ y:-30, opacity: 0}}
                            whileInView={{ y: 0, opacity: 1}}
                            transition={{ delay: 1.75 }}
                            className="bg-white dark:bg-black py-5 px-3 rounded-md shadow-md hover:shadow-lg flex justify-center cursor-pointer">
                            <h5 className="text-md font-thin text-black dark:text-white">Spotify</h5>
                            <svg className="ml-2 w-6 h-6 fill-green-600" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                        </motion.div>
                    </a>

                    <a target="_blank" href={post.itunes} rel="noreferrer">
                        <motion.div 
                            initial={{ y:-30, opacity: 0}}
                            whileInView={{ y: 0, opacity: 1}}
                            transition={{ delay: 1.9 }}
                            className="bg-white dark:bg-black py-5 px-3 rounded-md shadow-md hover:shadow-lg flex justify-center cursor-pointer">
                            <h5 className="text-md font-thin text-black dark:text-white">iTunes</h5>
                            <svg className="ml-2 w-6 h-6 fill-rose-200" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>iTunes</title><path d="M11.977 23.999c-2.483 0-4.898-.777-6.954-2.262a11.928 11.928 0 01-4.814-7.806A11.954 11.954 0 012.3 4.994 11.85 11.85 0 0110.08.159a11.831 11.831 0 018.896 2.104 11.933 11.933 0 014.815 7.807 11.958 11.958 0 01-2.091 8.937 11.855 11.855 0 01-7.78 4.835 12.17 12.17 0 01-1.943.157zm-6.474-2.926a11.022 11.022 0 008.284 1.96 11.044 11.044 0 007.246-4.504c3.583-5.003 2.445-12.003-2.538-15.603a11.022 11.022 0 00-8.284-1.96A11.046 11.046 0 002.966 5.47C-.618 10.474.521 17.473 5.503 21.073zm10.606-3.552a2.08 2.08 0 001.458-1.468l.062-.216.008-5.786c.006-4.334 0-5.814-.024-5.895a.535.535 0 00-.118-.214.514.514 0 00-.276-.073c-.073 0-.325.035-.56.078-1.041.19-7.176 1.411-7.281 1.45a.786.786 0 00-.399.354l-.065.128s-.031 9.07-.078 9.172a.7.7 0 01-.376.35 9.425 9.425 0 01-.609.137c-1.231.245-1.688.421-2.075.801-.22.216-.382.51-.453.82-.067.294-.045.736.051 1.005.1.281.262.521.473.71.192.148.419.258.674.324.563.144 1.618-.016 2.158-.328a2.36 2.36 0 00.667-.629c.06-.089.15-.268.2-.399.176-.456.181-8.581.204-8.683a.44.44 0 01.32-.344c.147-.04 6.055-1.207 6.222-1.23.146-.02.284.027.36.12a.29.29 0 01.109.096c.048.07.051.213.058 2.785.008 2.96.012 2.892-.149 3.079-.117.136-.263.189-.864.31-.914.188-1.226.276-1.576.447-.437.213-.679.446-.867.835a1.58 1.58 0 00-.182.754c.001.49.169.871.55 1.245.035.034.069.066.104.097.192.148.387.238.633.294.37.082 1.124.025 1.641-.126z"/></svg>
                        </motion.div>
                    </a>
                </div>
                <AndroidPromo />
                <Footer />
                <Whatsapp />
            </div>
        </div>
        </Layout>
    )
}

export async function getServerSideProps({ params: {slug} }){

    await dbConnect()
    /* find data in database */
    const result = await Blog.findOne({'slug': slug})
    //console.log(result.slug)

    const post = result.toObject()
    post._id = post._id.toString()
    post.date = post.date.toString()
    
    //const post_res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug]=${slug}`)

    //console.log(post_res.data.data[0])

    cloudinary.config({
        cloud_name: 'dbqn6vejg'
    })

    const cloudinaryUrl = cloudinary.url('meta-slug-new_tbcsfo', {
        width: 1012,
        height: 506,
        transformation: [
          {
            fetch_format: 'auto',
            quality: 'auto'
          },
          {
            overlay: {
              url: result.metaImage
            }
          },
          {
            flags: 'layer_apply',
            width: 420,
            height: 426,
            gravity: 'north_west',
            x: 325,
            y: 42
          }
        ]
      })


    return {
        props: {
            post: post,
            ogImageUrl: cloudinaryUrl
        }
    }
}

export default Post