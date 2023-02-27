/*
extractors extracts resources/raw materials from deposits
types of resource sources: 
*/


class extractor {
    constructor(extractionRate){ //per second extraction rate
        this.extractionRate = extractionRate
    }
    increaseByPercentage(perc){
        this.extractionRate = this.extractionRate + this.extractionRate*perc
    }
    increaseByFlatRate(rate){
        this.extractionRate = this.extractionRate + rate
    }
}

class SolidExtractor {
    constructor(extractionRate){
        super(extractionRate)
    }
}
class LiquidExtractor {
    constructor(extractionRate){
        super(extractionRate)
    }

}

class GassExtractor {
    constructor(extractionRate){
        super(extractionRate)
    }

}

class PlasmaExtractor{
    constructor(extractionRate){
        super(extractionRate)
    }

}

