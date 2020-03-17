const Witness = (witnessObj) => {
    return `
    <section class="witnessContainer__Witness">
        <div class ="witnessContainer__Header">Witness:<br> ${witnessObj.name}</div><br>
        <div class ="witnessContainer__info">Statement:<br> ${witnessObj.statements}</div>
    </section>
    `
}

export default Witness