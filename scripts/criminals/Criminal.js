const Criminal = (criminal) => {
    return `
    <section class="criminalsContainer__Criminal">
        <div>${criminal.name}</div>
        <div>Age: ${criminal.age}</div>
        <div>Crime: ${criminal.conviction}</div>
        <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </section>
    `
}

export default Criminal