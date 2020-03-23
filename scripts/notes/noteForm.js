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
        const criminalName = document.querySelector("#criminal").value
        const criminals = useCriminals()
        const foundCriminal = criminals.find(criminal => criminalName === criminal.name)
        const foundCriminalId = foundCriminal.id
        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminalId: foundCriminalId,
            timestamp: noteDate,
        }
        console.log(newNote)

        // Change API state and application state
        saveNotes(newNote)
    }
})

const render = () => {
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <br>
        <form>
            <label>Date:</label><input type="date" id="date"><br>
            <label>Suspect:</label><input type="text" id="criminal"><br>
            <label>Notes:</label><textarea id="noteText"></textarea><br>
        </form>
        <button id="saveNote">Save Note</button>
    `
}


const NoteForm = () => {
    render()
}

export default NoteForm