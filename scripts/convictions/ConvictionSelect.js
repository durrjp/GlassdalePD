/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {

        const selectedCrime = event.target.value
        console.log(selectedCrime)

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