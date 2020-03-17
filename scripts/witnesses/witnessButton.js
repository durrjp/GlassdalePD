const contentTarget = document.querySelector(".witnesses__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const witnessesEvent = new CustomEvent("witnessesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(witnessesEvent)
    }
})

export const DisplayWitnessButton = () => {
    contentTarget.innerHTML = "<button type='button' class='buttonToggle' id='showWitnesses'>Show Witnesses</button>"
}

let WitnessButtonOn = true

eventHub.addEventListener("witnessesClicked", event => {
    const buttonTarget = document.querySelector(".buttonToggle")
    WitnessButtonOn = !WitnessButtonOn
    if (WitnessButtonOn) {
        buttonTarget.innerHTML = "Show Witnesses"
    } else {
        buttonTarget.innerHTML = "Show Criminals"
    }
})

