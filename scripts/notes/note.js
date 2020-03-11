const Note = (noteObj) => {
    return `
    <section class="criminalsContainer__Criminal">
        <div class ="criminalsContainer__Header">${criminalObj.name}</div><br>
        <div class ="criminalsContainer__info">Age: ${criminalObj.age}</div>
        <div class ="criminalsContainer__info">Crime: ${criminalObj.conviction}</div>
        <div class ="criminalsContainer__info">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class ="criminalsContainer__info">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>

    </section>
    `
}

export default Criminal
