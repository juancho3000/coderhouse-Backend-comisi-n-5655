import express from 'express';
import events from "./data/fs/events.js";

const server = express();

const PORT = 8080;

const callBack = () => console.log("servidor listo ahora mismo en puerto:" + PORT);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.listen(PORT, callBack);

//endpoints

//api/products post
server.post("/api/products", async (req, res) => {
    try {
        const data = req.body;
        const response = await events.createEvent(data);
        if (response === "name and place are obligatory") {
            return res.json({
                statusCode: 400,
                message: response,
            });
        } else {
            return res.json({
                statusCode: 201,
                message: "successfully created",
                response
            });
        }

    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 500,
            message: error.message,
        });
    }
});
//api/products post

server.get("/api/products", async (req, res) => {
    try {
        const all = await events.readEvents()
        if (Array.isArray(all)) {
            return res.json({
                statusCode: 200,
                response: all
            });
        } else {
            return res.json({
                statusCode: 400,
                message: all
            });
        }
    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 500,
            message: error.message,
        });
    }
});

server.get("/api/products/:eid", async (req, res) => {
    try {
        const { eid } = req.params;
        const productId = await events.readEeventById(eid);
        if (typeof productId === "string") {
            return res.json({
                statusCode: 404,
                message: productId
            });
        } else {
            return res.json({
                statusCode: 200,
                responsse: productId
            });
        };
    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 500,
            message: error.message,
        });
    };
});

server.put("/api/products/:eid/:quantity", async (req, res) => {
    try {
      
    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 500,
            message: error.message,
        });
    }
})

server.get("/list", (req, res) => {
    try {
        const listData = 2 /*[
            {name: "juan", id: 1, job: "engineer"},
            {name: "carlos", id: 1, job: "doctor"},
            {name: "beliana", id: 1, job: "lawyer"},
        ];*/
        if (Array.isArray(listData)) {
            return res.status(200).json({
                success: true,
                responsse: listData,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "there is no data"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})

server.get("/api/products/:eid", (req, res) => {
    const { eid } = req.params;
    const oneId = events.readEeventById(eid);
    return res.status(200).json(oneId);
})

const ruta = "/";
const cbRoute = (req, res) => {
    return res.status(200).send("first express server");
};
server.get(ruta, cbRoute);

const ruta2 = "/products"
const cbRoute2 = (req, res) => {
    const products = ["juan", "suarez"];
    return res.status(200).send(products)
};
server.get(ruta2, cbRoute2);

const rutaApi = "/api/users"
const cbRouteApi = (req, res) => {
    const users = [
        { name: "alfredo", id: 1, email: "alfg87@email.com" },
        { name: "raquel", id: 2, email: "raqe95@email.com" },
        { name: "asier", id: 3, email: "asp01@email.com" },
    ]
    return res.status(200).json(users);
};
server.get(rutaApi, cbRouteApi);

const rutaParams = "/api/products/:pid"
const cbRouteParams = (req, res) => {
    const { pid } = req.params;
    return res.status(200).send("el ID del producto es:" + pid)
};
server.get(rutaParams, cbRouteParams);

const rutaParams2 = "/api/products/:title/:category/:price/:stock"
const cbRouteParams2 = (req, res) => {
    const { title, category, price, stock } = req.params;
    return res.status(200).json({ title, category, price, stock })
};
server.get(rutaParams2, cbRouteParams2);