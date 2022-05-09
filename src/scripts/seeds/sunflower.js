//  defining and exporting a function that will create a sunflower object
// function does not have any parameters, and will contain the following properties: 
// type, height, output

export const createSunflower = () => {
    const sunflower = { 
        type: "Sunflower", 
        height: 380,
        output: 3
    }
    return sunflower
}