import express from 'express';
import events from "./data/fs/events.js";

const server = express();

const PORT = 8080;

const callBack = () => console.log("servidor listo ahora mismo en puerto:" + PORT);
server.use(express.urlencoded({extended:true}));
server.listen(PORT, callBack);

//endpoints

server.get("/api/events", (req, res) => {
    try{
        const all = events.readEvents();
        if(Array.isArray(all)){
            return res.status(200).json({
                success: true,
                responsse: all,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: all,
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})

server.get("/api/events/:eid", (req, res) => {
    const {eid} = req.params;
    const oneId = events.readEeventById(eid);
    return res.status(200).json(oneId);
})

const ruta = "/";
const cbRoute = (req, res) => {
    return res.status(200).send("first express server");
};
server.get(ruta, cbRoute);

const ruta2 = "/events"
const cbRoute2 = (req, res) => {
    const products = ["juan", "suarez"];
    return res.status(200).send(products)
};
server.get(ruta2, cbRoute2);

const rutaApi = "/api/users"
const cbRouteApi = (req, res) => {
    const users = [
        {name: "alfredo" , id: 1, email: "alfg87@email.com"},
        {name: "raquel" , id: 2, email: "raqe95@email.com"},
        {name: "asier" , id: 3, email: "asp01@email.com"},
]
return res.status(200).json(users);
};
server.get(rutaApi, cbRouteApi);

const rutaParams = "/api/products/:pid"
const cbRouteParams = (req, res) => {
    const {pid} = req.params;
    return res.status(200).send("el ID del producto es:" + pid)
};
server.get(rutaParams, cbRouteParams);

const rutaParams2 = "/api/products/:title/:category/:price/:stock"
const cbRouteParams2 = (req, res) => {
    const {title, category, price, stock} = req.params;
    return res.status(200).json({ title,category,price,stock })
};
server.get(rutaParams2, cbRouteParams2);