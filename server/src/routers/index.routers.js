import { Router } from "express";
import apiRouter from "./api/index.routerapi.js";
import viewRouter from "./views/index.view.js";
//import userRouter from "./views/user.view.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", viewRouter);
//router.use("/usr", userRouter);

export default router;
