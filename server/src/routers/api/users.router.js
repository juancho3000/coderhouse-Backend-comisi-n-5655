import { Router } from "express";
import userEvents from "../../data/fs/userManager.js";
const usersRouter = Router();

usersRouter.post("/", async(req, res) => {
    try {
        const data = req.body;
        const response = await userEvents.createEvent(data);
        if (response === "name and place are obligatory") {
          return res.json({
            statusCode: 400,
            message: response,
          });
        } else {
          return res.json({
            statusCode: 201,
            message: "successfully created",
            response,
          });
        }
      } catch (error) {
        console.log(error);
        return res.json({
          statusCode: 500,
          message: error.message,
        });
      }
})

usersRouter.get("/", async (req, res) => {
    try {
        const all = await userEvents.readEvents();
        if (Array.isArray(all)) {
          return res.json({
            statusCode: 200,
            response: all,
          });
        } else {
          return res.json({
            statusCode: 400,
            message: all,
          });
        }
      } catch (error) {
        console.log(error);
        return res.json({
          statusCode: 500,
          message: error.message,
        });
      }
})

usersRouter.get("/:uid", async (req, res) => {
    try {
        const { uid } = req.params;
        const productId = await userEvents.readEventById(uid);
        if (typeof productId === "string") {
          return res.json({
            statusCode: 404,
            message: productId,
          });
        } else {
          return res.json({
            statusCode: 200,
            responsse: productId,
          });
        }
      } catch (error) {
        console.log(error);
        return res.json({
          statusCode: 500,
          message: error.message,
        });
      }  
})

usersRouter.put("/:uid", async (req, res) => {
    try {
        const { uid, quantity } = req.params;
        const response = await userEvents.soldTicket(quantity, uid);
        if (typeof response === "number") {
          return res.json({
            statusCode: 200,
            response: "capacity available:" + response,
          });
        } else if (response === "There isn't any product") {
          return res.json({
            statusCode: 404,
            message: response,
          });
        } else {
          return res.json({
            statusCode: 400,
            message: response,
          });
        }
      } catch (error) {
        console.log(error);
        return res.json({
          statusCode: 500,
          message: error.message,
        });
      }
})

usersRouter.delete("/:uid", async (req, res) => {
    try {
        const { uid } = req.params;
        const response = await userEvents.removeEventById(uid);
        if (response === "There are no events with this ID to delete" + id) {
          return res.json({
            statusCode: 404,
            message: response,
          });
        } else {
          return res.json({
            statusCode: 200,
            response,
          });
        }
      } catch (error) {
        console.log(error);
        return res.json({
          statusCode: 500,
          message: error.message,
        });
      }
})
export default usersRouter;