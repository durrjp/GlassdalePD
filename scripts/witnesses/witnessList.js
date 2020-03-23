import { getWitnesses, useWitnesses } from "./witnessProvider.js"
import Witness from "./witnesses.js"


const contentTarget = document.querySelector(".witnessContainer")
const eventHub = document.querySelector(".container")



const render = () => {
    // contentTarget.classList.add("invisible")
    getWitnesses().then(() => {
        const Witnesses = useWitnesses()

        contentTarget.innerHTML = Witnesses.map(
            currentWitnessObject => {
                return Witness(currentWitnessObject)
            }
        ).join("")
    })
}

let visibility = false
eventHub.addEventListener("witnessesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
        render()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})