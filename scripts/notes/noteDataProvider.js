const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const useNotes = () => notes.slice()

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNotes = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}
//event triggered = post new json object to the notes.json server 
// eventHub.addEventListener("saveClicked", event => {
//     const newNote = event.detail
//     if ("noteText" in event.detail) {
//     }
//     saveNote(newNote)
// })


