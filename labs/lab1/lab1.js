'use strict';
/**
 * Reflection question 1:
 * Det är pga att false kan innebära flera saker som t.ex. false, undefiend, 0, null, NaN eller "". 
 * Så man måste va speficik på vad false kan innebära. Sen betyder det då att resten är true.
 */

const imported = require("./inventory.js"); //CommonJS
//console.log(imported.inventory['Sallad']);
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

/*
console.log(function makeOptions(inventory, selectOption){
    inventory = imported.inventory;
    selectOption = 'foundation'; //onödig?

    //Bara bas som skall selectas
    let foundation = Object.keys(inventory).filter(
        (name) => inventory[name].foundation
    );
    return ( 
        <select
            id = {} //vad ska man fylla i här?
            name = "foundation"
            value = {} //vad ska man fylla i här?
        >
        {foundation.map(name =>(
            <option> 
            {name} {", "} {inventory[name].price} {"kr"} 
            </option>
        ))}
        </select>
    );
});
*/

console.log('\n--- Assignment 2 ---------------------------------------')

class Salad {
    constructor(){
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
    }

    add(name, properties) {
        if(properties.foundation){
            this.foundation.push(name);
            //console.log('Foundation added: ' + name);
        } else if(properties.protein){
            this.protein.push(name);
            //console.log('Protein added: ' + name);
        } else if(properties.extra){
            this.extra.push(name);
            //console.log('Extra added: ' + name);
        } else if(properties.dressing){
            this.dressing.push(name);
            //console.log('Dressing added: ' + name);
        }
        //console.log(name + ' not added!');
    }

    remove(name) {
        if(this.foundation.indexOf(name) > -1){
            this.foundation.splice(this.foundation.indexOf(name),1);
            //console.log('Foundation removed: ' + name);
        } else if(this.protein.indexOf(name) > -1){
            this.protein.splice(this.protein.indexOf(name),1);
            //console.log('Protein removed: ' + name);
        } else if(this.extra.indexOf(name) > -1){
            this.extra.splice(this.extra.indexOf(name),1);
            //console.log('Extra removed: ' + name);
        } else if(this.dressing.indexOf(name) > -1){
            this.dressing.splice(this.dressing.indexOf(name),1);
            //console.log('Dressing removed' + name);
        }
        //console.log(name + ' not removed!');
    }

    //använd concat för alla tre,
    getPrice(){
        
    }

    count(property){
        
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
//console.log('En ceasarsallad kostar ' + myCaesarSalad.getPrice() + 'kr');
// En ceasarsallad kostar 45kr
//console.log('En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

// reflection question 3
/*
console.log('typeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype);
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad)));
console.log('check 2: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype)));
*/

console.log('\n--- Assignment 4 ---------------------------------------')
/*
let myGourmetSalad = new GourmetSalad()
.add('Sallad', imported.inventory['Sallad'], 0.5)
.add('Kycklingfilé', imported.inventory['Kycklingfilé'], 2)
.add('Bacon', imported.inventory['Bacon'], 0.5)
.add('Krutonger', imported.inventory['Krutonger'])
.add('Parmesan', imported.inventory['Parmesan'], 2)
.add('Ceasardressing', imported.inventory['Ceasardressing']);
console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 1)
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');
*/

console.log('\n--- Assignment 5 ---------------------------------------')
//console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);

/**
 * Reflection question 4
 */
/**
 * Reflection question 5
 */
/**
 * Reflection question 6
 */
