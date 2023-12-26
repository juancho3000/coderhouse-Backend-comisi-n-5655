const fs = require("fs")
const crypto = require("crypto")
class EventsManager {
    static #perGain = 0.3;
    static #totalGain = 0;
    events = []
    init(){ 
        try{
       const exists = fs.existsSync(this.path);
       console.log(exists);
        if(!exists){
            const data = JSON.stringify([], null, 2)
            fs.writeFileSync(this.path, data)
        }else{
            this.events = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            console.log(all);
        }
       }catch(error){
        return error.message
       }
    }

    constructor (path) {
        this.path = path;
        this.events = []
        this.init();
    }

    async createEvent(data){
        try{
            if(!data.name || !data.place){
                throw new Error("name and place are obligatory")
            }
            const event = {
            id: crypto.randomBytes(12).toString("hex"),
            name: data.name,
            place: data.place,
            price: data.price || 10,
            capacity: data.capacity || 50,
            date: data.date || new Date()
        }
        this.events.push(event);
        const jsonData = JSON.stringify(this.events, null, 2);
        await fs.promises.writeFile(this.path, jsonData);
        console.log(event.id);
        return event.id
        } catch(err){
            console.log(err.message);
            return err.message;
        }
        
    }
}

const events = new EventsManager("./server/data/fs/files/events.json");
events.createEvent({name: "house1" , place: "urb"});
events.createEvent({name: "apt1" , place: "buildings", price: "$60000", capacity: "5"});
events.createEvent({name: "mansion1", price:"$500000", capacity: "20"});

