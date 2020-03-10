/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// let ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()

//     const render = convictionsCollection => {
//         /*
//             Use interpolation here to invoke the map() method on
//             the convictionsCollection to generate the option elements.
//             Look back at the example provided above.
//         */
//         contentTarget.innerHTML =
//         `
//             <select class="dropdown" id="crimeSelect">
//                 <option value="0">Please select a crime...</option>
//                 ${
//                     convictionsCollection.map(crimeObj => {
//                         return `<option value="${crimeObj.id}">${crimeObj.name}</option>`
//                     })
//                 }
//             </select>
//         `
//     }

//     render(convictions)
// }

// export default ConvictionSelect


// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect" ) {
        console.log("stuffs")
        const selectedCrime = event.target.value
        // Create custom event. Provide an appropriate name.
        const crimeSelectEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeId: selectedCrime
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(crimeSelectEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crimeObj => {
                    return `<option value="${crimeObj.name}">${crimeObj.name}</option>`
                })
            }
        </select>
    `
}

export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}