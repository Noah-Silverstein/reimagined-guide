




function createBabylonCelestialBody(scene, body, materialInfo){
    var babylonCelestialBody = BABYLON.MeshBuilder.CreateSphere(body.name, { diameter: body.size }, scene);
    var CelestialBodyMaterial = new BABYLON.StandardMaterial(body.name + "Material", scene);
    babylonCelestialBody.material = CelestialBodyMaterial;
    return babylonCelestialBody;
}


function makeBabylonPlanetSystem(scene, planet, materialInfo){
    var babylonPlanet = createBabylonCelestialBody(scene, planet, materialInfo);
    let moons = planet.moons;
    let bablyonMoons = moons.map(moon => createBabylonCelestialBody(moon))
    return [babylonPlanet, bablyonMoons];
}




