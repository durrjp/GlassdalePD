import { getNotes, useNotes } from "./noteDataProvider.js"
import { Note } from "./note.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", event => {
    render()
})
let visibility = false
eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility
    if (visibility) {
    contentTarget.classList.add("invisible")
    } else {
    contentTarget.classList.remove("invisible")
    }
})

export const NoteList = () => {
    render()
}

const render = () => {
    getNotes().then(() => {
        const allTheNotes = useNotes()
        const criminalCollection = useCriminals()
        console.log
        contentTarget.innerHTML = allTheNotes.map(note => {
            const relatedCriminal = criminalCollection.find(criminal => {
                return criminal.id === note.criminalId
            })
            return Note(note, relatedCriminal)
        }
        ).join("")
    })
}


// deleting notes

const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(render)
    }
})

