
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
    constructor(name, size, crustResources, orbit, axialTilt){
      this.name = name;
      this.size = size;
      this.moons = moons;
      this.orbit = orbit;
      this.axialTilt = axialTilt;
      this.crustResources = crustResources;
      this.mantleResources = mantleResources;
      this.coreResources = coreResources;
    }
    logCelestialBody(){
        console.log(this.name + " " + this.size)
        this.crustResources.forEach(el => {
            console.log(el.element.name + " ")
        });
    }
}

class Planet extends CelestialBody {
    constructor(name, size, crustResources, orbit, axialTilt, moons){
        super(name, size, crustResources, orbit, axialTilt);
        this.moons = moons;
    }
}

class Moon extends CelestialBody {
    constructor(name, size, crustResources, orbit, axialTilt){
        super(name, size, crustResources, orbit, axialTilt);
    }
}


module.export = {
    Planet, 
    Moon,
    Orbit
}
