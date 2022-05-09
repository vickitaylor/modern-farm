// importing functions to invoke on this module. 
import { createPlan } from "./plan.js"
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"
// import { addPlant} from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"


// console.log("Welcome to the main module")

// invoking the create plan function, 
const yearlyPlan = createPlan ()
console.log(yearlyPlan)

// // invoking the plantSeeds function. 
const plantedSeeds = plantSeeds(yearlyPlan)
// console.log(usePlants())
// console logged use plants as that is the function that exported the array that was created by the plantSeeds function. 
// const plantedSeedArray = usePlants()
// console.log(plantedSeedArray)

const plantsHarvested = harvestPlants(usePlants()) 
console.log(plantsHarvested)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(plantsHarvested)




// no longer needed
// invoking the create seed function for all seeds
// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn()
// const potatoSeed = createPotato()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()
// const wheatSeed = createWheat()

// console.log(asparagusSeed, cornSeed, potatoSeed, soybeanSeed, sunflowerSeed, wheatSeed)

// invoking the add plant functions for all seeds using the functions that created the seeds in the function 
// 🦖🦖🦖could also use the variable created above 
// const asparagusPlant = addPlant(createAsparagus())
// const cornPlant = addPlant(createCorn())
// const potatoPlant = addPlant(createPotato())
// const soybeanPlant = addPlant(createSoybean())
// const sunflowerPlant = addPlant(createSunflower())
// const wheatPlant = addPlant(createWheat())

// console.log(asparagusPlant)

// invoked the usePlants function, to return the array of seed objects

// const plantedPlants = usePlants()
// console.log(plantedPlants)

