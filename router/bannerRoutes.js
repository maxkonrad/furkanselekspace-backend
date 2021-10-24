import express from 'express'
import mongoose from 'mongoose'
import BannerDB from '../db/banners.js'

const bannerRouter = express.Router()

bannerRouter.get('/', async (req, res) => {
    try {
        const allBanners = await BannerDB.find()
        res.json(allBanners)
    } catch (error) {
        console.log(error)
    }
})

bannerRouter.delete('/:id', async (req,res) => {
    try {
        const bannerId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bannerId)) return res.status(404).send("Banner not found :(")
        await BannerDB.findByIdAndDelete(bannerId)
        
    } catch (error) {
        console.log(error)
    }
})

bannerRouter.post('/', async (req, res) => {
    try {
        const Banner = req.body
        const createdBanner = await BannerDB.create(Banner)
        res.status(201).json(createdBanner)
        
    } catch (error) {
        console.log(error)
    }
})

export default bannerRouter