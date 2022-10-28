import { Schema, model, models } from 'mongoose'


const blogSchema = new Schema({
    title: String,
    description: String,
    content: String,
    more_content: String,
    gridImage: String,
    slug: String,
    spotify: String,
    youtube: String,
    itunes: String,
    metaImage: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Blog = models.Blog || model('Blog', blogSchema)

export default Blog