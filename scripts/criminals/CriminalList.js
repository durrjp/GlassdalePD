import Criminal from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";


const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// let CriminalList = () => {
//     const criminals = useCriminals()
//     criminals.forEach(criminalObject => {
//         contentElement.innerHTML += Criminal(criminalObject)
//     });
// }

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeSelected', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminalObject => {
            if  (criminalObject.conviction === event.detail.crimeId) {
                return true
            } else if (event.detail.crimeId === "0") {
                return true
            } else
                return false
        })

        contentElement.innerHTML = ""

        render(matchingCriminals)


        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})


const render = criminalCollection => {
    criminalCollection.forEach(criminalObj => {
        contentElement.innerHTML += Criminal(criminalObj)
    });
}


// Render ALL criminals initally

export const CriminalList = () => {
    const appStateCriminals = useCriminals()
    render(appStateCriminals)
}





