'use strict';
/**
 * Reflection question 1:
 * Det är pga att false kan innebära flera saker som t.ex. false, undefiend, 0, null, NaN eller "". 
 * Så man måste va speficik på vad false kan innebära. Sen betyder det då att resten är true.
 */

const imported = require("./inventory.js"); //CommonJS
//console.log(imported.inventory['Sallad']);
//console.log(imported.inventory['Krutonger']);

/*
console.log('Object.keys():');
let names = Object.keys(imported.inventory);
names
.sort((a, b) => a.localeCompare(b, "sv", {sensitivity: 'case'}))
.forEach(name => console.log(name));
*/

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
    let foundation = Object.keys(inventory).filter((name) => inventory[name].foundation);
    let protein = Object.keys(inventory).filter((name) => inventory[name].protein);
    let extra = Object.keys(inventory).filter((name) => inventory[name].extra);
    let dressing = Object.keys(inventory).filter((name) => inventory[name].dressing);
    
    if(options === 'foundation'){
        console.log('----Foundation----')
        foundation.map(name => {
        console.log('<option value='+name+'> '+name+', '+inventory[name].price+' kr<option>');
        });
        console.log('------------------')
    }

    if(options === 'protein'){
        console.log('----Protein----')
        protein.map(name => {
        console.log('<option value='+name+'> '+name+', '+inventory[name].price+' kr<option>');
        });
        console.log('---------------')
    }

    if(options === 'extra'){
        console.log('----Extra----')
        extra.map(name => {
        console.log('<option value='+name+'> '+name+', '+inventory[name].price+' kr<option>');
        });
        console.log('-------------')
    }

    if(options === 'dressing'){
        console.log('----Dressing----')
        dressing.map(name => {
        console.log('<option value='+name+'> '+name+', '+inventory[name].price+' kr<option>');
        });
        console.log('----------------')
    }
}

let fillIn = {
    1 : 'foundation',
    12 : 'protein',
    123 : 'extra',
    1234 : 'dressing'
};

console.log(makeOptions(imported.inventory, fillIn[1]));

console.log('\n--- Assignment 2 ---------------------------------------')

class Salad {
    static instanceCounter = 0;
    constructor(){
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
        this.uuid = 'salad_' + Salad.instanceCounter++;
    }

    add(name, properties) {
        if(properties.foundation){
            this.foundation.push({name, ...properties}); //,{name, ...properties}
            return;
        } else if(properties.protein){
            this.protein.push({name, ...properties});
            return;
        } else if(properties.extra){
            this.extra.push({name, ...properties});
            return;
        } else if(properties.dressing){
            this.dressing.push({name, ...properties});
            return;
        }
        //console.log(name + ' not added!');
    }

    remove(name) { //Stack
        if(this.foundation.findIndex(e => e.name === name) > -1){ 
            //
            return this.foundation.splice(this.foundation.findIndex(e => e.name === name),1);
            //
        } else if(this.protein.findIndex(e => e.name === name) > -1){ 
            //
            return this.protein.splice(this.protein.findIndex(e => e.name === name),1);
            //
        } else if(this.extra.findIndex(e => e.name === name) > -1){
            //
            return this.extra.splice(this.extra.findIndex(e => e.name === name),1);
            //
        } else if(this.dressing.findIndex(e => e.name === name) > -1){
            //
            return this.dressing.splice(this.dressing.findIndex(e => e.name === name),1);
            //
        } 
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
//console.log(JSON.stringify(myCaesarSalad) + '\n');
myCaesarSalad.remove('Gurka');
//console.log(JSON.stringify(myCaesarSalad) + '\n');

console.log('\n--- Assignment 3 ---------------------------------------')

//ev. ha fyra olika reduce? concat stackoverflow, reduce livecodedev
Salad.prototype.getPrice = function(){
    let salad = this.foundation.concat(this.protein, this.extra, this.dressing);
    return salad.reduce((acc, currV) => acc + currV.price, 0);
};

//Funka inte med Object.values()?? Alt. lösning detta?
Salad.prototype.count = function (property){
    if(property === 'foundation'){
        return this.foundation.length;
    } else if(property === 'protein'){
        return this.protein.length;
    } else if(property === 'extra'){
        return this.extra.length;
    } else if(property === 'dressing'){
        return this.dressing.length;
    }
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
        super.add(name,{...properties, size});
    }
    
    getPrice(){
        let salad = this.foundation.concat(this.protein, this.extra, this.dressing); 
        return salad.reduce((acc, currV) => acc + currV.price * currV.size, 0);
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
 * För det objektet den är skapad i? t.ex. en klass
 */
/**
 * Reflection question 5
 * Ja det går om man använder defineProperty
 */
/**
 * Reflection question 6
 * Typ men bara genom att köra closures 
 */

 console.log('\n--- Extra ---------------------------------------------')
 class ShoppingCart {
    constructor(){
        this.basket = [];
    }

 }

