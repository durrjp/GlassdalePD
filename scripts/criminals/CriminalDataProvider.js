
let criminals = []

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => {
                criminals = parsedCriminals.slice()
            }
        )
}
export const useCriminals = () => {
    //sort by criminal by last name before copying
    criminals.sort((currentThing, nextThing) => {
        const [currFirstName, currLastName] = currentThing.name.split(" ")
        const [nextFirstName, nextLastName] = nextThing.name.split(" ")

        if (currFirstName < nextFirstName) {return -1}
        if (currFirstName > nextFirstName) {return 1}
        else {return 0}
    })
    return criminals.slice()
}
