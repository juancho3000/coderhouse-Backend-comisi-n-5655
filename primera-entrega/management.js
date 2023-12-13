class ProductManager{
    static events = []
    
    constructor(data){
     
    }

    create(data) {
        const eventProduct = {
            id: ProductManager.events.length === 0 ? 1 : ProductManager.events[ProductManager.events.length - 1].id + 1,
            name : data.name,
            locality : data.locality,
            price : data.price || 10,
            stock : data.stock || 50,
            date : data.date || new Date()
        }
        ProductManager.events.push(eventProduct)
    }
    read(){
        return ProductManager.events
    }
    readOne(id){
        return ProductManager.events.find((each) => each.id === Number(id));
    }
}

const events = new ProductManager({
    name: "dip belt",
    locality: "calisthencis store",
    price: 40,
    stock: 20,
})

events.create({
    name: "lifting belt",
    locality: "powerlifting store",
    price: 35,
    stock: 100,
})

events.create({
    name: "knee sleeves",
    locality: "powerlifting store",
    price: 20,
    stock: 30,
})

events.create({
    name: "climbing rope",
    locality: "calisthenics store",
    price: 10,
    stock: 50,
})

console.log(events.read());
//console.log(events.readOne(3));