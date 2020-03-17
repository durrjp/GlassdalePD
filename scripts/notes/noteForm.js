import { saveNotes } from "./noteDataProvider.js"

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
        const criminalName = document.querySelector("#criminal").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: criminalName,
            timestamp: Date.now()
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