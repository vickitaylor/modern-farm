// defining and exporting a function that will create an object 
// function has no parameters and object properties are type, height, and output

export const createPotato = () => { 
    const potato = {
        type: "Potato", 
        height: 32, 
        output: 2,
    }
    return potato
}
