const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click",event => {
            const dialogElement = event.target.parentNode
            dialogElement.close()
        })
    }
    const allDetailButtons = document.querySelectorAll("button[id^='associates--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener("click", event => {
            const dialogSiblingSelector = `#${event.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        })
    }
}
export default initializeDetailButtonEvents