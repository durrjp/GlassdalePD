const Criminal = (criminalObj) => {
    return `
    <section class="criminalsContainer__Criminal">
        <div class ="criminalsContainer__Header">${criminalObj.name}</div><br>
        <div class ="criminalsContainer__info">Age: ${criminalObj.age}</div>
        <div class ="criminalsContainer__info">Crime: ${criminalObj.conviction}</div>
        <div class ="criminalsContainer__info">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class ="criminalsContainer__info">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
        <dialog class="dialog--criminal" id="alibi--${criminalObj.id}">
            <div class="alibi--name">Name: ${criminalObj.known_associates[0].name}</div>
            <div class="alibi--detail">Alibi: ${criminalObj.known_associates[0].alibi}</div>
            <button class="button--close" id="close--${criminalObj.id}">Close</button>
        </dialog>
    </section>
    `
}

export default Criminal


