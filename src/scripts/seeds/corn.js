// defining and exporting a function.  function creates an array with 2 identical objects in it.
// object properties are type, height, and output 


export const createCorn = () => {
    let corn = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]

    return corn
}