import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// defining and exporting a function that will have 1 parameter of the planting plan as the input
// the plan tells you how the seeds will be planted. 
// the function will iterate thru the plan array and the arrays held in the plan array 


export const plantSeeds = (plan) => {
    // iterating thru the plan array 
    for (const row of plan) {
        // iterating thru each row on the plan array
        // if functions to determine if the planned plant is a match to plant the seeds to the field array 
        for (const seed of row)
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            } else if (seed === "Corn") {
                addPlant(createCorn())
            } else if (seed === "Potato") {
                addPlant(createPotato())
            } else if (seed === "Soybean") {
                addPlant(createSoybean())
            } else if (seed === "Sunflower") {
                addPlant((createSunflower()))
            } else if (seed === "Wheat") {
                addPlant(createWheat())
            }
    }

}



