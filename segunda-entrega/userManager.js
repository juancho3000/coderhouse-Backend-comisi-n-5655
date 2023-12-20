class UserManagerSecond{
    static events = []
    
    constructor(data){
  
    }

    create(data) {
        const eventProduct = {
            name : data.name,
            photo: data.photo,
            email: data.email,
            date : data.date || new Date()
        }
        UserManagerSecond.events.push(eventProduct)
    }
    read(){
        return UserManagerSecond.events
    }
    readOne(id){
        return UserManagerSecond.events.find((each) => each.id === Number(id));
    }
}

const fs = require("fs")
const ruta = "./segunda-entrega/eventsUserManager.json";
const conetnt = JSON.stringify(
    [
        {
            name: "men-sup",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.luegopago.com%2Fproductos%2Ff6979fa4-9cbc-412e-88e0-0aaccccf0f4d-centrum-men-hombre-200-tabletas&psig=AOvVaw31q-Ly7pKJWcaKbuIiENUY&ust=1702524890696000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCM4s29i4MDFQAAAAAdAAAAABAE",
            email: "somethin1.@email.com",
        }, 
        {
            name: "magnesium",
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.misvitaminas.com.co%2Fmagnesium-citrate-400-mg-now&psig=AOvVaw2q6dMlJYEsUc8Kj6dd78X7&ust=1702525328410000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjigp6_i4MDFQAAAAAdAAAAABAD",
            email: "somethin2.@email.com",
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
.then(res => console.log("userManager2",JSON.parse(res)))
.catch(err => console.log(err));