const fs = require("fs")

const ruta = "./04-clase/events.prom.json"
const contenido = JSON.stringify(
    [
        {
            title: "nevera",
            category: "electrodomesticos",
            price: "$500" 
        }, 
        {
            title: "sofa",
            category: "muebles",
            price: "$130"
        }
    ],null,2
)

fs.promises
.writeFile(ruta, contenido)
.then(res => console.log(res))
.catch(err => console.log(err));

let configuracion = "utf-8";
fs.promises
.readFile(ruta, configuracion)
.then(res => console.log(JSON.parse(res)))
.catch(err => console.log(err));