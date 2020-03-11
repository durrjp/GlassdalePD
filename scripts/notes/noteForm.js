
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML = `
        <br>
        <form>
            <label>Date:</label><input type="date" id="date"><br>
            <label>Suspect:</label><input type="text" id="suspect"><br>
            <label>Notes:</label><textarea id="note-text"></textarea><br>
        </form>
        <button id="saveNote">Save Note</button>
    `
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log(document.getElementById("note-text").value)
        const saveClickEvent = new CustomEvent("saveClicked", {
            detail: {
                noteText: document.getElementById("note-text").value,
                date: document.getElementById("date").value,
                suspect: document.getElementById("suspect").value
            }
        // Make a new object representation of a note
        })
        // Change API state and application state
        eventHub.dispatchEvent(saveClickEvent)
    }

})

const NoteForm = () => {
    render()
}

export default NoteForm