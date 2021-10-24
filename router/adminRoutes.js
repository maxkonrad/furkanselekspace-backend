import Express from "express";
import AdminDB from '../db/admins.js'

const adminRouter = Express.Router()

adminRouter.get('/', async (req, res) => {
    try {
        const allAdmins = await AdminDB.find()
        res.json(allAdmins)
        
    } catch (error) {
        console.log(error)
    }
})

export default adminRouter