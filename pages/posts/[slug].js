import Image from "next/image"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import axios from 'axios'


const Post = ({post}) => {

    return(
        <div className='bg-white dark:bg-slate-900'>
            <Navigation />
            <section className="mt-5 mx-auto">
                <div>
                    <h3 className="text-2xl lg:text-5xl font-extrabold text-center mb-2 px-8">{post.attributes.title}</h3>
                    <div className="bg-white dark:bg-slate-800 rounded-md drop-shadow-lg mx-6 px-4 py-5 text-center">
                        <Image 
                            src={`/${post.attributes.gridImage}`}
                            width={300}
                            height={300}
                        />
                        <p className="text-2xl lg:text-3xl text-justify pt-3">{post.attributes.firstWords}</p>
                    </div>
                </div>
                
            </section>
            <Footer />
        </div>
    )
}

export async function getStaticProps({ params: {slug} }) {
    //const post_res = await axios.get(`http://localhost:1337/api/posts?filters[slug]=${slug}`)
    //console.log(slug)
    const post_res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug]=${slug}`)
    //console.log(post_res.data.data)
    
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
    //console.log(posts.data)

    return {
        paths: posts.data.map(post => ({
            params: { slug: String(post.attributes.slug) }
        })),
        fallback: false
    }
}


export default Post