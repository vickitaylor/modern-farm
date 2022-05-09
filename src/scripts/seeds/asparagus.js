// defining a function that is being exported 
// function returns an object with properties of type, height, and output
// function does not have any parameters


export const createAsparagus= () => { 
    const asparagus = {
        type: "Asparagus", 
        height: 24, 
        output: 4,
    }
    return asparagus
}