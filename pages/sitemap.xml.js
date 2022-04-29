//pages/sitemap.xml.js
import axios from 'axios'
const EXTERNAL_DATA_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://tunesketch.com</loc>
     </url>
     <url>
       <loc>https://tunesketch.com/posts</loc>
     </url>
     ${posts
       .map(( post) => {
         return `
       <url>
           <loc>${`https://tunesketch.com/posts/${post.attributes.slug}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await axios.get(EXTERNAL_DATA_URL)
  const posts = request.data

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts.data)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap