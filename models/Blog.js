import mongoose from 'mongoose'


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    more_content: {
        type: String,
    },
    gridImage: {
        type: String,
    },
    slug: {
        type: String,
    },
    spotify: {
        type: String,
    },
    youtube: {
        type: String,
    },
    itunes: {
        type: String,
    },
    metaImage: {
        String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)