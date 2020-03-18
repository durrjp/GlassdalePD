import { getNotes, useNotes } from "./noteDataProvider.js"
import { Note } from "./note.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    NoteList()
    contentTarget.classList.remove("invisible")
})

eventHub.addEventListener("allNotesClicked", event => {
    NoteList()
})
let visibility = true
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
    contentTarget.classList.add("invisible")
}

const render = () => {
    getNotes().then(() => {
        const allTheNotes = useNotes()
        const criminalCollection = useCriminals()

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

