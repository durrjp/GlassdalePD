
let criminals = []

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => {
                criminals.push(parsedCriminals)
            }
        )
}
export const useCriminals = () => criminals
