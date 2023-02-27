const { alphaElementsArray } = require('./elements.js');
const { alphaElements } = require('./elements.js');
const { getRndInteger } = require('./random');
const { getRandomElements } = require('./random');


/*
types of stars
[Main Sequence, Red Giant, Red Dwarf, White Dwarf, Neutron Star, Black Hole, Supergiant]

Main sequence stars mostly contain hydrogen and helium


*/
const starTypes = ["Main Sequence", "Red Giant", "Red Dwarf", "White Dwarf", "Neutron Star", "Black Hole", "Supergiant"]

class Star {
    constructor(name, size, energyOutput, elements, starType){
      this.name = name;
      this.size = size;
      this.elements = elements;
      this.energyOutput = energyOutput;
      this.starType = starType;
    }

    logStar(){
        console.log(this.name + " size: " + this.size + " energyOutput: " + this.energyOutput + ", type: " + this.starType
        );
    }

}

function starGenerator(name){
    const starElements = [alphaElements.hydrogen, alphaElements.helium];
    return new Star(name, getRndInteger(1e6, 1e7), getRndInteger(1e3, 1e6), starElements, "Main Sequence") 

}

const qsun = starGenerator("qstar")
qsun.logStar()

module.exports = {
    starGenerator
}