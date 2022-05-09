// defining a variable that is an empty array 

let plantedSeeds = []

// defining and exporting a function named addPlant, function has one parameter, a seed object

export const addPlant = (seed) => {
    let arrayCheck = Array.isArray(seed)
    if (arrayCheck === true) {
        //     // 🦒🦒🦒🦒pushing both of the corn seed objects into the array 🦖🦖🦖🦖
        plantedSeeds.push(seed[0]); plantedSeeds.push(seed[1])
    } else {
        plantedSeeds.push(seed)
    }
    return plantedSeeds
}


// defining and exporting a function that exports the array for plantedSeeds
export const usePlants = () => {
    let plantsGrowingArray = Array.from(plantedSeeds)
    return plantsGrowingArray
}
