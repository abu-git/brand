import dbConnect from "../../../lib/dbConnect"
import Blog from "../../../models/Blog"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch(method){
        case 'GET':
            try{
                const blogs = await Blog.find({}) /* find all data in database */
                res.status(200).json({ success: true, data: blogs })
            }catch(error){
                res.status(400).json({ success: false })
                console.log(error)
            }
            break
        case 'POST':
            try{
                const blog = await Blog.create(req.body) /* create new model in database */
                res.status(201).json({ success: true, data: blog })
            }catch(error){
                res.status(400).json({ success: false })
                console.log(error)
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}