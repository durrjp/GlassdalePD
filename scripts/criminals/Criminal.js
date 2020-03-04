const Criminal = (criminalObj) => {
    return `
    <section class="criminalsContainer__Criminal">
        <div>${criminalObj['name']}</div>
        <div>Age: ${criminalObj.age}</div>
        <div>Crime: ${criminalObj.conviction}</div>
        <div>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
    </section>
    `
}

export default Criminal