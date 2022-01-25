'use strict';
/**
 * Reflection question 1:
 * Det är pga att false kan innebära flera saker som t.ex. false, undefiend, 0, null, NaN eller "". 
 * Så man måste va speficik på vad false kan innebära. Sen betyder det då att resten är true.
 */

function count(kind){ //Spara den, Objekt som mappar
    return Object.keys(imported.inventory).filter(x => imported.inventory[kind]);
}
const imported = require("./inventory.js"); //CommonJS
console.log(imported.inventory['Sallad']);
//console.log(imported.inventory['Krutonger']);


console.log('Object.keys():');
let names = Object.keys(imported.inventory);
names
.sort((a, b) => a.localeCompare(b, "sv", {sensitivity: 'case'}))
.forEach(name => console.log(name));

/*
console.log('\nObject.keys():');
for(const name in imported.inventory){
    console.log(name);
}
console.log('Not sorted');
*/

/**
 * Reflection question 2
 * Man måste tänka på vart eventet sker, exekveringen av koden sker int inte i sort. Fråga varför annars.
 */

console.log('\n--- Assignment 1 ---------------------------------------')

function makeOptions(inventory, options){
    /* Kan göras separat eller som nedsåtende.
    let foundation = Object.keys(inventory).filter(name => inventory[name].foundation);
    return foundation.map(
        name => '<option value='+name+'/> '+name+', '+inventory[name].price+'kr</option>'
    );
    */
    return Object.keys(inventory).filter(name => inventory[name][options]).map(
        name => '<option value='+name+'/> '+name+', '+inventory[name].price+'kr</option>'
    );
}

console.log(makeOptions(imported.inventory, 'foundation'));

console.log('\n--- Assignment 2 ---------------------------------------')

class Salad {
    static instanceCounter = 0;
    constructor(){
        /*
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
        */
        this.salad = {}; // Testa sen efter
        this.uuid = 'salad_' + Salad.instanceCounter++;
    }

    add(name, properties) {
        /*
        if(properties.foundation){
            return this.foundation.push({name, ...properties});
        } else if(properties.protein){
            return this.protein.push({name, ...properties});
        } else if(properties.extra){
            return this.extra.push({name, ...properties});
        } else if(properties.dressing){
            return this.dressing.push({name, ...properties});
        }
        */
        return this.salad[name] = properties;
        //console.log(name + ' not added!');
    }

    remove(name) { //Stack
        return delete this.salad[name];
        /*
        if(this.foundation.findIndex(e => e.name === name) > -1){ 
            return this.foundation.splice(this.foundation.findIndex(e => e.name === name),1);
        } else if(this.protein.findIndex(e => e.name === name) > -1){ 
            return this.protein.splice(this.protein.findIndex(e => e.name === name),1);
        } else if(this.extra.findIndex(e => e.name === name) > -1){
            return this.extra.splice(this.extra.findIndex(e => e.name === name),1);
        } else if(this.dressing.findIndex(e => e.name === name) > -1){
            return this.dressing.splice(this.dressing.findIndex(e => e.name === name),1);
        } 
        */
        //console.log(name + ' not removed!');
    }   
}

//console.log('Test '+imported.inventory['Sallad'].foundation);

let myCaesarSalad = new Salad();
myCaesarSalad.add('Sallad', imported.inventory['Sallad']);
myCaesarSalad.add('Kycklingfilé', imported.inventory['Kycklingfilé']);
myCaesarSalad.add('Bacon', imported.inventory['Bacon']);
myCaesarSalad.add('Krutonger', imported.inventory['Krutonger']);
myCaesarSalad.add('Parmesan', imported.inventory['Parmesan']);
myCaesarSalad.add('Ceasardressing', imported.inventory['Ceasardressing']);
myCaesarSalad.add('Gurka', imported.inventory['Gurka']);
console.log(JSON.stringify(myCaesarSalad) + '\n');
myCaesarSalad.remove('Gurka');
console.log(JSON.stringify(myCaesarSalad) + '\n');

console.log('\n--- Assignment 3 ---------------------------------------')

//ev. ha fyra olika reduce? concat stackoverflow, reduce livecodedev
Salad.prototype.getPrice = function(){
    return Object.keys(this.salad).reduce((acc, currV) => acc + this.salad[currV].price,0);
    //let salad = this.foundation.concat(this.protein, this.extra, this.dressing);
    //return this.salad.reduce((acc, currV) => acc + imported.inventory[currV].price, 0); //Error om man försöker ta currV.size här, skapa en egen i gourme
};

//Funka inte med Object.values()??  
Salad.prototype.count = function (property){
    return Object.values(Object.keys(this.salad).filter(name => this.salad[name][property])).length;
    /*
    if(property === 'foundation'){
        return this.foundation.length;
    } else if(property === 'protein'){
        return this.protein.length;
    } else if(property === 'extra'){
        return this.extra.length;
    } else if(property === 'dressing'){
        return this.dressing.length;
    }
    */
};

console.log('En ceasarsallad kostar ' + myCaesarSalad.getPrice() + 'kr');
// En ceasarsallad kostar 45kr
console.log('En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

/**  reflection question 3
 * I form av en kedja t.ex. {} --> {} --> null, så om det inte finns något i första så kolla den nästa i kedja
*/

console.log('typeof Salad: ' + typeof Salad); //function
console.log('typeof Salad.prototype: ' + typeof Salad.prototype); //Object
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype); //slut i kedjan
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad); //Object
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype); //null
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad))); //skall vara true, vi kallar nästa i kedjan dvs object
console.log('check 2: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype))); //Object.prototype skall va en spegelbild till Salad.protorype?

console.log('\n--- Assignment 4 ---------------------------------------')
class GourmetSalad extends Salad{
    constructor() {
        super();
    }

    add(name, properties, size = 1){
        super.add(name,{...properties, size}); //Vi skriver bara över värdet, vi adderar inte, viktigt att skicka in en kopia
        return this;
    }
    
    getPrice(){
        return Object.keys(this.salad).reduce((acc, currV) => acc + (this.salad[currV].price * this.salad[currV].size),0);
    }
}

let myGourmetSalad = new GourmetSalad();
myGourmetSalad.add('Sallad', imported.inventory['Sallad'], 0.5);
myGourmetSalad.add('Kycklingfilé', imported.inventory['Kycklingfilé'], 2);
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 0.5);
myGourmetSalad.add('Krutonger', imported.inventory['Krutonger']);
myGourmetSalad.add('Parmesan', imported.inventory['Parmesan'], 2);
myGourmetSalad.add('Ceasardressing', imported.inventory['Ceasardressing']);
//console.log(JSON.stringify(myGourmetSalad) + '\n');
console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 1);
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');

console.log('\n--- Assignment 5 ---------------------------------------')
console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);

/**
 * Reflection question 4
 * För det objektet den är skapad i? t.ex. en klass (function object?)
 */
/**
 * Reflection question 5
 * Finns ingetn syntax, kan göra, finns en function där man lägger en flagga, freeze som det låter.
 */
/**
 * Reflection question 6
 * Typ men bara genom att köra closures 
 */

/*
 console.log('\n--- Extra ---------------------------------------------')
 class ShoppingCart {
    constructor(){
        this.basket = [];
    }

    add(salad){
        this.basket.push(salad)
    }

    remove(salad){
        if(!this.basket.length){
            console.log('Korgen är tom!');
            return;
        } else {
            return this.basket.splice(this.basket.findIndex(e=> e.salad === salad),1);
        }
    }

    price(){
        return this.basket.reduce((acc, currV) => acc += currV.getPrice(), 0);
    }

    size(){
        return this.basket.length;
    }
 }

 let basketTest = new ShoppingCart();
 basketTest.add(myCaesarSalad);
 basketTest.add(myGourmetSalad);
 console.log('Antal grejer i korgen:' + basketTest.size());
 basketTest.remove(myGourmetSalad);
 console.log('Antal grejer i korgen:' + basketTest.size());
 console.log('Korgens pris: '+ basketTest.price());
 */