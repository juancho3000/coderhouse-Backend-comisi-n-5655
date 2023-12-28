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

    //creating data - begining
    async createEvent(data){
        try{
            if(!data.name || !data.place){
                throw new Error("name and place are obligatory")
            }
            const event = {
            id: crypto.randomBytes(12).toString("hex"),
            name: data.name,
            place: data.place,
            price: data.price || "$" + 10,
            capacity: data.capacity || 50,
            date: data.date || new Date()
        }
        this.events.push(event);
        const jsonData = JSON.stringify(this.events, null, 2);
        await fs.promises.writeFile(this.path, jsonData);
        console.log(event.id);
        return event.id
        } catch(error){
            console.log(error.message);
            return error.message;
        } 
    }
    //creating data - end

    //reading data - begining
    readEevents() {
        try{
            if(this.events.length === 0){
                throw new Error("there is no data");
            } else {
               console.log(this.events);
            return this.events 
            } 
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }
    //reading data - end

    //reading single selected id data - begining
    readEeventById(id) {
    try{
        const one = this.events.find(each => each.id === id)
        if(!one){
            throw new Error("no events found with id:" + id)
        }else{
            console.log("read event id:" + id);
            return one;
        }
    }catch(error){
        console.log(error.message);
        return error.message
    }
}
//reading single selected id data - begining

/* //removeEvent, I just don't want to touch it
async removeEventById(id){
    try{
        let one = this.events.find(each => each.id === id)
        if(!one) {
            throw new Error("there isn't any event to delete")
        } else {
           this.events = this.events.filter(each => each.id !== id);
           const jsonData = JSON.stringify(this.events, null, 2);
           await fs.promises.writeFile(this.path, jsonData);
           console.log("deleted id:" + id);
           return id;
        }
    }catch (error) {
        console.log(error.message);
        return error.message;
    }
}*/  //removeEvent, I just don't want to touch it

//operation to sell tickets according to capacity - begining
async soldTicket (qty, eventId) {
    try{
        const one = this.readEeventById(eventId);
        if(one){
            if(one.capacity >= qty) {
                 one.capacity = one.capacity - qty
        EventsManager.#totalGain = EventsManager.#totalGain + one.price * qty * EventsManager.#perGain

        const jsonData = JSON.stringify(this.events, null, 2)
        await fs.promises.writeFile(this.path, jsonData)
        console.log("capacity available:" + one.capacity);
        return one.capacity;
            } else {
                
            }
        }

    } catch (error) {
        console.log("no product sold", error.message);
        return error.message
    }
    
}
//operation to sell tickets according to capacity - end

}


//events list - begining

const events = new EventsManager("./server/data/fs/files/events.json");
events.readEevents();
events.createEvent({name: "house1" , place: "urb"});
events.createEvent({name: "apt1" , place: "buildings", price: "$60000", capacity: 5});
events.createEvent({name: "mansion1", place: "mansions", price: "$500000", capacity: 20});
events.readEevents();
events.readEeventById(3);
events.readEeventById("42f13d29362e51286a2a2541");
//events.removeEventById("42f13d29362e51286a2a2541")
events.soldTicket(10, "07312b42fa7b1672cd5a6311");

//events list - begining

