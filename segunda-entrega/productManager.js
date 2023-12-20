class ProductManagerSecond{
    static events = []
    
    constructor(data){
  
    }

    create(data) {
        const eventProduct = {
            id: ProductManagerSecond.events.length === 0 ? 1 : ProductManagerSecond.events[ProductManagerSecond.events.length - 1].id + 1,
            title : data.title,
            locality : data.locality,
            price : data.price || 10,
            stock : data.stock || 50,
            photo: data.photo,
            date : data.date || new Date()
        }
        ProductManagerSecond.events.push(eventProduct)
    }
    read(){
        return ProductManagerSecond.events
    }
    readOne(id){
        return ProductManagerSecond.events.find((each) => each.id === Number(id));
    }
}

const fs = require("fs")
const ruta = "./segunda-entrega/eventsProductManager.json";
const conetnt = JSON.stringify(
    [
        {
            title: "dip belt",
            locality: "calisthencis store",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gymreapers.com%2Fproducts%2Fgymreapers-dip-belt&psig=AOvVaw38iY0Vcu3BophfrRVmSbF0&ust=1702525483229000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOibj-e_i4MDFQAAAAAdAAAAABAF",
            price: 40,
            stock: 20,
        }, 
        {
            title: "lifting belt",
            locality: "powerlifting store",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.raiselower.co.nz%2Fproducts%2Fsbd-belt-2021&psig=AOvVaw3V-QpvxG7YE4ZG_paii7O1&ust=1702525525020000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCuqPu_i4MDFQAAAAAdAAAAABAE",
            price: 35,
            stock: 100,
        }
    ],null,2
)

fs.promises
.writeFile(ruta, conetnt)
.then(res => console.log(res))
.catch(err => console.log(err));


let configuracion = "utf-8";
fs.promises
.readFile(ruta, configuracion)
.then(res => console.log("productManager2",JSON.parse(res)))
.catch(err => console.log(err));