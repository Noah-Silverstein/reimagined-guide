const { PlanetarySystem } = require('./main.js');
const { Star } = require('./main.js');
const { Ore } = require('./main.js');

class Planet {
    constructor(size, resources){
      this.size = size;
      this.resources = resources;
    }
  }

/*
info for earth resources
https://www.weforum.org/agenda/2021/12/abundance-elements-earth-crust/

var earthResources = [[alphaElements.oxygen, 1.26e22],
                      [alphaElements.silicon, 7.5e21],
                      [alphaElements.aluminum, 2.2e21],
                      [alphaElements.iron, 1.4e21],
                      [alphaElements.calcium, 9.7e20]]


*/

const earth = new Planet(
    500,
    [ironDeposit = new Ore(5000), 
     bronzeDeposit = new Ore(3000)])
const mars = new Planet(450, [])
const sun = new Star(5000, 500, "y")
const solarSystem = new PlanetarySystem(sun, [earth, ])

console.log(earth.resources[0].amount);

