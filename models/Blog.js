import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'


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
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

/* Paginate plugin setup */
BlogSchema.plugin(mongoosePaginate)

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)