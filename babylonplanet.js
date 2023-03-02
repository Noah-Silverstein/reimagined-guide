
//the babylon celestial body is basically a container for both the mesh and the information of the cestial body
//the mesh contains positional information for rendering on screen. 
//the body itself contains information relative to the body its orbiting around (so the Orbit class contains length and speed..)
class BabylonCelestialBody {
    constructor(celestialBody, celestialBodyMesh){
        this.celestialBody = celestialBody;
        this.celestialBodyMesh = celestialBodyMesh;
    }
}