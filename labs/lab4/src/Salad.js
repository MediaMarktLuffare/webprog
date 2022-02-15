import { v4 as uuidv4 } from 'uuid';

class Salad {
    constructor() {
        this.salad = {}
        this.uuid = uuidv4();
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
        return Object.keys(this.salad).filter(name => this.salad[name][property]).length;
    }

    getIngredients() {
        return Object.keys(this.salad);
    }
}
//Punkt 3
Salad.getPrice = function(salad){
    return Object.keys(salad.salad).reduce((acc, currV) => acc + salad.salad[currV].price,0);
}

Salad.getIngredients = function(salad){
    return Object.keys(salad.salad);
}

export default Salad;