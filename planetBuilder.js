
const { alphaElementsArray } = require('./elements.js');
const { alphaElements } = require('./elements.js');
const { getRndInteger } = require('./random');
const { getRandomElements } = require('./random');


class Resource {
    constructor(amount){
        this.amount = amount
    }
}

class Deposit extends Resource{
    constructor(amount, element){
        super(amount);
        this.element = element
    }
}


//ores that exist 
class Planet {
    //size in km, 
    constructor(name, size, crustResources, mantleResources, coreResources){
      this.name = name;
      this.size = size;
      this.crustResources = crustResources;
      this.mantleResources = mantleResources;
      this.coreResources = coreResources;
    }
    logPlanet(){
        console.log(this.name + " " + this.size)
        this.crustResources.forEach(el => {
            console.log(el.element.name + " ")
        });
    }
  }


function planetGenerator(name, n){
    //generate random available harvestable resources
    const harvestableElements = getRandomElements(alphaElementsArray, n);
    const planetDeposits = harvestableElements.map(el => new Deposit(getRndInteger(1000, 1e6), el));
    return new Planet(name, getRndInteger(1e6, 1e12),planetDeposits, [], [])
}

var bearth = planetGenerator("bearth", 5);
console.log(bearth.crustResources);
bearth.logPlanet()

