//element class points in Kelvin
class Element {
    constructor(name, meltingPoint, boilingPoint){
        this.name = name;
        this.meltingPoint = meltingPoint;
        this.boilingPoint = boilingPoint;
    }
    isGas(temp){
        return temp > this.boilingPoint
    }
    isLiquid(temp){
       return temp > this.boilingPoint && temp <= this.meltingPoint
    }
    isSolid(temp){
       return temp < this.meltingPoint 
    }
}


//List of 50 most common elements in the solar system
//in the alpha universe 
const alphaElements = {
    hydrogen: new Element("Hydrogen", 14, 20),
    helium: new Element("Helium", 1, 4),
    oxygen: new Element("Oxygen", 54, 90),
    carbon: new Element("Carbon", 3500, 4827),
    neon: new Element("Neon", 25, 27),
    iron: new Element("Iron", 1811, 3134),
    nitrogen: new Element("Nitrogen", 63, 77),
    silicon: new Element("Silicon", 1687, 2628),
    magnesium: new Element("Magnesium", 922, 1363),
    sulfur: new Element("Sulfur", 388, 717),
    nickel: new Element("Nickel", 1728, 3186),
    sodium: new Element("Sodium", 371, 1156),
    calcium: new Element("Calcium", 1115, 1757),
    aluminum: new Element("Aluminum", 933, 2792),
    chromium: new Element("Chromium", 2180, 2944),
    titanium: new Element("Titanium", 1941, 3560),
    potassium: new Element("Potassium", 336, 1032),
    manganese: new Element("Manganese", 1519, 2334),
    argon: new Element("Argon", 84, 87),
    cobalt: new Element("Cobalt", 1495, 2870),
    copper: new Element("Copper", 1358, 2835),
    zinc: new Element("Zinc", 692, 1180),
    fluorine: new Element("Fluorine", 53, 85),
    vanadium: new Element("Vanadium", 2183, 3680),
    gallium: new Element("Gallium", 302, 2477),
    germanium: new Element("Germanium", 937, 2830),
    bromine: new Element("Bromine", -7, 59),
    arsenic: new Element("Arsenic", 817, 613),
    selenium: new Element("Selenium", 217, 684),
    tin: new Element("Tin", 232, 2602),
    cadmium: new Element("Cadmium", 594, 1039),
    iodine: new Element("Iodine", 114, 184),
    lead: new Element("Lead", 327, 1749),
    antimony: new Element("Antimony", 904, 1860),
    barium: new Element("Barium", 1002, 2170),
    tungsten: new Element("Tungsten", 3695, 5828),
    mercury: new Element("Mercury", -39, 357),
    thallium: new Element("Thallium", 303, 1457),
    bismuth: new Element("Bismuth", 271, 1564),
    thorium: new Element("Thorium", 2028, 5061),
    uranium: new Element("Uranium", 1408, 4404)
}
//array of all elements in the alphaElements list
const alphaElementsArray = Object.values(alphaElements);


module.exports = {
    alphaElements,
    alphaElementsArray

}

