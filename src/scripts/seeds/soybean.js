//  defining and exporting a function that will create a soybean object, function has no parameters
// object will contain the following properties: type, height, and output 

export const createSoybean = () => {
    const soybean = { 
        type: "Soybean", 
        height: 20,
        output: 4
    }
    return soybean
}
