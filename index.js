import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './router/routes.js'
import bannerRouter from './router/bannerRoutes.js'
import adminRouter from './router/adminRoutes.js'

const app = express()

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))
app.use(express.json())

dotenv.config()

app.use('/posts', router)
app.use('/banners', bannerRouter)
app.use('/admins', adminRouter)

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('connected'))
    .catch((err) => console.log(err))

})