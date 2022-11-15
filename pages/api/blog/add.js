import dbConnect from '../../../lib/dbConnect'
import Blog from "../../../models/Blog"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addBlog(req, res){

    try{
        const { title, description, content, more_content, gridImage, slug, spotify, youtube, itunes, metaImage } = req.body
        console.log('Connecting to MongoDB...')
        await connectMongo()
        console.log('Connected to MongoDB...')

        console.log('Creating Document')
        const blog = await Blog.create(req.body)
        console.log('Created Document')

        res.json({blog})
    }catch(error){
        console.log(error)
        res.json({error})
    }
}