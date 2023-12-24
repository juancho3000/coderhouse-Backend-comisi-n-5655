class ProductManagerSecond{
    static events = []
    constructor(data){}
    create(data) {
        try{
            if(data.title || data.photo, !data.stock){
                throw new Error("fill the inputs that are required");
            }else{
                   const eventUsers = {
            id: ProductManagerSecond.events.length === 0 ? 1 : ProductManagerSecond.events[ProductManagerSecond.events.length - 1].id + 1,
            title : data.title,
            locality : data.locality,
            price : data.price || 10,
            stock : data.stock || 50,
            photo: data.photo,
            date : data.date || new Date()
        }
         ProductManagerSecond.events.push(eventUsers)
            return eventUsers;
            }
         
        } catch(error){
            return error.message
        }
        
    }
   read(){
    try {
        const usuarios = ProductManagerSecond.events;
        if(usuarios.length === 0){
            throw new error("there are no users")
        }else{
            return usuarios
        }
    }catch(error){
        return error.message
    }
   }

   read(){
        return ProductManagerSecond.events
    }

    readOne(id){
        try{
            const userById = ProductManagerSecond.events.find((each) => 
            each.id === Number(id))
            if(userById){
                return userById
            }else{
                throw new Error ("no users with ID:" + id)
            }
        }catch(error){
            return error.message
        }
    }
}
/*
const user = new ProductManagerSecond() ;
let users = user.read();
console.log(users);
const user1 =user.create({title:"peter", photo: "photo1", stock:15, locality: "place1"})
const user2 =user.create({title:"andres", photo: "photo2", stock:25, locality: "place2"})
const user3 =user.create({title:"john", photo: "photo3", stock:5, locality: "place3"})
console.log("viendo usuarios",user1, user2, user3)
users = user.read();
console.log("mensaje de users",users);
const one = user.readOne(1);
const threeId = user.readOne(3)
console.log("mensaje de readOne",one, threeId)*/

const fs = require("fs")
const ruta = "./segunda-entrega/eventsProductManager.json";
const events = new ProductManagerSecond
const conetnt = JSON.stringify(
    [
     events.create, {
            title: "dip belt",
            locality: "calisthencis store",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gymreapers.com%2Fproducts%2Fgymreapers-dip-belt&psig=AOvVaw38iY0Vcu3BophfrRVmSbF0&ust=1702525483229000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOibj-e_i4MDFQAAAAAdAAAAABAF",
            price: 40,
            stock: 20,
        }, 
       events.create, {
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
.then(res => console.log("mensaje res",res))
.catch(err => console.log("mensaje err",err));


let configuracion = "utf-8";
fs.promises
.readFile(ruta, configuracion)
.then(res => console.log("productManager2",JSON.parse(res, )))
.catch(err => console.log(err));
//console.log(events.read)*/
