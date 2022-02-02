class Salad {
    static instanceCounter = 0;
    constructor() {
        this.salad = {}
        this.uuid = 'salad_' + Salad.instanceCounter++;
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

    //Fråga i värsta fall igen.
    count(property) {
        return Object.keys(this.salad).filter(name => this.salad[name][property]).length;
    }

    //Gör denna lite snyggare kanske?
    getIngredients() {
        return Object.keys(this.salad);
    }
}
export default Salad;