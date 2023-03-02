

//renders planets and their moons 
//the tick is the distance it should move 
function planetarySystemMover(planet, tick) {
    earth.position.x = 30 * Math.cos(tick);
    earth.position.z = 30 * Math.sin(tick);
    moon.position.x = earth.position.x + 10 * Math.cos(tick * 5);
    moon.position.z = earth.position.z + 10 * Math.sin(tick * 5);
    moon.rotation.y += 0.01;
}