
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
export const useCriminals = () => criminals
