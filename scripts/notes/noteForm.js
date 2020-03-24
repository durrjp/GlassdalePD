import { saveNotes } from "./noteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const noteDate = document.querySelector("#date").value
        const CriminalId = document.querySelector("#criminalSelect").value
        // const foundCriminal = criminals.find(criminal => criminalName === criminal.name)
        // const foundCriminalId = foundCriminal.id
        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminalId: parseInt(CriminalId),
            timestamp: noteDate,
        }
        console.log(newNote)

        // Change API state and application state
        saveNotes(newNote)
    }
})

const render = () => {
    const allCriminals = useCriminals()
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        
        <form>
            <fieldset>
                <label>Date:</label><input type="date" id="date"><br>
            </fieldset>
            <fieldset>
                <label>Criminal:</label>
                <select class="dropdown" id="criminalSelect">
                    <option value="0">Please select a crime...</option>
                    ${
                        allCriminals.map(criminalObj => {
                            return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
                            }
                        )
                    }
                </select><br>
            </fieldset>
            <fieldset>
                <label>Notes:</label><textarea id="noteText" cols="40" rows="4"></textarea><br>
            </fieldset>
        </form>
        <button id="saveNote">Save Note</button>
    `
}


const NoteForm = () => {
    render()
}

export default NoteForm