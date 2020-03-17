import { saveNotes } from "./noteDataProvider.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"

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

        const criminalCollection = useCriminals()
        const noteText = document.querySelector("#noteText").value
        const criminalName = document.querySelector("#criminal").value
        const noteDate = document.querySelector("#date").value
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: criminalName,
            timestamp: noteDate,
            criminalid: relatedCriminal.id
        }

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