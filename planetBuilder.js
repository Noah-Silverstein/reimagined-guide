
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

//contains orbital positional information
class Orbit {
    constructor(orbitLength, orbitSpeed){
        this.orbitLength = orbitLength;
        this.orbitSpeed = orbitSpeed;
    }
}


// 
class CelestialBody {
    constructor(name, size, orbit, axialTilt, satellites){
      this.name = name;
      this.size = size;
      this.orbit = orbit;
      this.axialTilt = axialTilt;
      this.satellites = satellites;
      
    }
    logCelestialBody(){
        console.log(this.name + " " + this.size)
        this.crustResources.forEach(el => {
            console.log(el.element.name + " ")
        });
    }
}

class Sun extends CelestialBody{
    constructor(name, size, orbit, axialTilt, satellites){
        super(name, size, orbit, axialTilt, satellites);
    }
}

class Planet extends CelestialBody {
    constructor(name, size, orbit, axialTilt, satellites){
        super(name, size, orbit, axialTilt, satellites);
    }
}

class Moon extends CelestialBody {
    constructor(name, size, orbit, axialTilt, satellites){
        super(name, size, orbit, axialTilt, satellites);
    }
}


module.exports = {
    Planet, 
    Moon,
    Sun,
    Orbit
}
