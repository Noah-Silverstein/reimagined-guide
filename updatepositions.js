const { Planet } = require('./planetBuilder.js');
const { Moon } = require('./planetBuilder.js');
const { Sun } = require('./planetBuilder.js');
const { Orbit } = require('./planetBuilder.js');


/*
update position function (planetary system information, babylon meshes of all meshes in that planetary system)

*/

function createBabylonCelestialBody(scene, body, materialInfo){
    var babylonCelestialBody = BABYLON.MeshBuilder.CreateSphere(body.name, { diameter: body.size }, scene);
    var CelestialBodyMaterial = new BABYLON.StandardMaterial(body.name + "Material", scene);
    babylonCelestialBody.material = CelestialBodyMaterial;
    return babylonCelestialBody;
}

let terra = new Planet("terra", 10, new Orbit(50, 1), 0, [])
let sol = new Sun("sol", 30, new Orbit(0, 0), 0, [])


//renders planets and their moons 
//the tick is the distance it should move 
//celestial body is the normal class, while the mesh is the corresponding babylon mesh
//the satellitebodies are all the normal class bodies that orbit around the babylon mesh 
//I'm not sure it's the best way to do this as you are kind of doubling up on the code but I want to keep the rendering/drawing
//part of the code completely seperate from the info/logic part of the code that just means
class BabylonCelestialBody {
    constructor(celestialBody, celestialBodyMesh, satelliteBabylonCelestialBodies){
        this.celestialBody = celestialBody;
        this.celestialBodyMesh = celestialBodyMesh;
        this.satelliteBabylonCelestialBodies = satelliteBabylonCelestialBodies;
    }
}



/*
bablyon solor system has that babylon sun/mesh which in turn has a planet/mesh which has moons/mesh 
do both babylon sun and celestialsun need the sattelite info...probably right

*/

function updateSolarSystem(babylonCelestialBody, tick) {
    let mesh = babylonCelestialBody.celestialBodyMesh;
    let body = babylonCelestialBody.celestialBody;


    mesh.position.x = planet.orbit.orbitLength * Math.cos(tick);
    mesh.position.y = planet.orbit.orbitLength * Math.sin(tick);

    earth.position.x = 30 * Math.cos(tick);
    earth.position.z = 30 * Math.sin(tick);
    moon.position.x = earth.position.x + 10 * Math.cos(tick * 5);
    moon.position.z = earth.position.z + 10 * Math.sin(tick * 5);
    moon.rotation.y += 0.01;
}

