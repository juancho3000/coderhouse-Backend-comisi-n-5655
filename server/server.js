import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import {createServer} from "http";

import router from "./src/routers/index.routers.js"
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import socketUtils from "./src/utils/socket.utils.js";

//server
const server = express();
const PORT = 8080;
const callBack = console.log("servidor listo ahora mismo en puerto:" + PORT);
const httpServer = createServer(server);
const socketServer = new Server(httpServer);
httpServer.listen(PORT, callBack);
socketServer.on("connection", socketUtils);
//server

//templates
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");
//templates

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("server/public"));
server.use(morgan("dev"));
//middlewares

//endpoints
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
//endpoints

export {socketServer};