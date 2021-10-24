import express from 'express'
import mongoose from 'mongoose'
import Post from '../db/posts.js'

const router = express.Router()

router.get('/homepage', async (req, res) => {
    try {
        const lastThreePosts = await Post.find().sort({$natural:-1}).limit(3);
        res.json(lastThreePosts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const postId = req.params.id
        const wantedPost = await Post.findById(postId)
        if(!wantedPost) return
        res.status(200).json(wantedPost)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const post = req.body
        const createdPost = await Post.create(post)
        res.status(201).json(createdPost)
        
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const postId = req.params.id
        const {title, content, creator, imgSrc} = req.body

        if(!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send("Post not found :(")

        const updatedPost = {title, content, creator, imgSrc, _id: postId}
        await Post.findByIdAndUpdate(postId, updatedPost, {new:true})
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send("Post not found :(")
        await Post.findByIdAndDelete(postId)
    } catch (error) {
        console.log(error)
    }
})



export default router