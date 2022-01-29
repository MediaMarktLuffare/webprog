class Salad {
    static instanceCounter = 0;
    constructor() {
        this.salad = {}
        this.uuid;
    }

    add(name, properties) {
       return this.salad[name] = properties;        
    }
    remove(name) {
        delete this.salad.name;
    }

    getPrice() {
        return Object.keys(this.salad).reduce((acc, currV) => acc + this.salad[currV].price,0);
    }

    count(property) {
        return Object.values(Object.keys(this.salad).filter(name => this.salad[name][property])).length;
    }
}

export default Salad;