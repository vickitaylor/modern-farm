// defining and exporting a function to return an array of seed objects. function has a parameter of the array created in the tractor module. the function will return an array of seed objects, the number of objects returned will be the outputs of the seeds in the row. 
// ie. the soybean seed has an output of 4, so each time the soybean is listed in the parameter array, the function will add 4 soybean objects to the array. 
// the exception is with corn where the output is half since it is sold to ranchers.


export const harvestPlants = (plants) => {
    // created a new array to house all the plants each seed makes 
    let plantedPlants = []
    // iterating thru the array of seed objects that have been planted from the tractor module, if there is a match the number of seeds will be added to the array 
    for (const plant of plants) {
        if (plant.type === "Corn") { 
            plant.output = plant.output/ 2
        }
        for (let i = 0; i < plant.output; i++ ) {
            if (plant.type === "Asparagus") {
                plantedPlants.push(plant)
            } else if (plant.type === "Potato") {
                plantedPlants.push(plant)
            } else if (plant.type === "Soybean") {
                plantedPlants.push(plant)
            } else if (plant.type === "Sunflower") {
                plantedPlants.push(plant)
            } else if (plant.type === "Wheat") {
                plantedPlants.push(plant)
            } else if (plant.type === "Corn") {
                // will need to make sure this is half but currently running the full to see if function works.
                plantedPlants.push(plant)
            }
        }
    }
    return plantedPlants
}




