import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    updated_date: { type: Date, default: Date.now },
    imgSrc: {
        type: String,
        required: false
    }
})

const Post = mongoose.model('post', postSchema)

export default Post