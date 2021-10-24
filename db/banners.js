import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
})

const Banner = mongoose.model('banner', bannerSchema);
export default Banner