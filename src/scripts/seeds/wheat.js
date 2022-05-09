// defining and exporting a function to create a wheat object. function has no parameters 
// object will have the following properties, type, height, output 

export const createWheat = () => { 
    const wheat = {
        type: "Wheat", 
        height: 230, 
        output: 6
    }
    return wheat
}