//import ProductManager from "../primera-entrega/management";

//crear archivos sincronos
const fs = require("fs");
const ruta = "./04-clase/data/tickets.json"
const info = JSON.stringify([
    {
        title: "product1",
        category: "firstLine",
        price: "10$" 
    }, 
    {
        title: "product2",
        category: "secondLina",
        price: "$20"
    }
], null,2)
fs.writeFileSync(ruta, info);
//crear archivos sincronos

//leer archivos de forma asincrona
let configuracion = "utf-8"
const dataReading = fs.readFileSync(ruta, configuracion);
const convertData = JSON.parse(dataReading)
console.log(convertData);
//leer archivos de forma 

//eliminar archivos de manera sincrona
//fs.unlinkSync(ruta)
//eliminar archivos de manera sincrona

//verificacion de archivo existente de manera sincrona
const proof = fs.existsSync(ruta)
console.log(proof);
//verificacion de archivo existente de manera sincrona