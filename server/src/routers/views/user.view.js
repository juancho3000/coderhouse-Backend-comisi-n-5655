import { Router } from "express";
import userEvents from "../../data/fs/userManager.js";

const userViewRouter = Router();
userViewRouter.get("/", async (req, res, next) => {
    try{
        const all = await userEvents.readEvents()
        return res.render("profile" , {products: all})
    } catch (error){
        next(error)
    }
})

export default userViewRouter;