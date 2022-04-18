import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import axios from 'axios'
import { motion } from 'framer-motion'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'


const Post = ({post}) => {

    return(
        <div>
            <Head>
                <title>Brand. | {post.attributes.title}</title>
                <meta name="description" content={post.attributes.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <motion.div 
        exit={{ opacity:0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <div className='bg-white dark:bg-slate-900'>
                <Navigation />
                <div className="flex items-center ml-6">
                    <Link href="/posts" passHref>
                    <span className="pl-5 cursor-pointer text-sm mr-4 py-3 px-4 rounded-full border-0 text-black dark:text-white hover:text-white hover:bg-teal-700">
                        <ArrowNarrowLeftIcon className="h-7 w-7" />
                    </span>
                    </Link>
                </div>
                <section className="flex flex-col mt-4 mx-auto">
                        <div className="mx-8 lg:mx-16">
                            <h3 className="text-2xl lg:text-5xl font-extrabold text-center mb-5 px-8">{post.attributes.title}</h3>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-md drop-shadow-lg mx-6 lg:mx-48 px-4 py-5 text-center">
                            <Image 
                                src={`/${post.attributes.gridImage}`}
                                width={300}
                                height={300}
                                alt={post.attributes.title}
                            />
                            <p className="text-xl lg:text-3xl text-justify pt-3">{post.attributes.firstWords}</p>
                        </div>
                    
                </section>
                <Footer />
            </div>
        </motion.div>
        </div>
    )
}

export async function getStaticProps({ params: {slug} }) {
    //const post_res = await axios.get(`http://localhost:1337/api/posts?filters[slug]=${slug}`)
    const post_res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug]=${slug}`)
    
    return{
        props: {
            post: post_res.data.data[0]
        }
    }
}

export async function getStaticPaths() {
    //const posts_res = await axios.get("http://localhost:1337/api/posts")
    const posts_res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`)
    const posts = posts_res.data

    return {
        paths: posts.data.map(post => ({
            params: { slug: String(post.attributes.slug) }
        })),
        fallback: false
    }
}


export default Post