//creaer archivo de maner asincrona
const fs = require("fs")
const ruta = "./04-clase/data/eventsCBS.json"
const conetnt = JSON.stringify(
    [
        {
            title: "jabon",
            category: "cuidado personal",
            price: "5$" 
        }, 
        {
            title: "acetaminofen",
            category: "farmacia",
            price: "$10"
        }
    ],null,2
)

fs.writeFile(ruta, conetnt, (error) => {
    if(error){
        return error;
    }
})
//creaer archivo de maner asincrona

//leer archivo de form asincrona
let configuracion = "utf-8"

fs.readFile(ruta, configuracion, (error, exito) => {
    if(error){
        console.log(error, "mensaje error"); return error
    }else if(exito) {
        console.log(exito, "mensaje exito"); return exito;
    }
})
//leer archivo de form asincrona