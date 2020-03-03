import Criminal from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";

const CriminalList = () => {

    const contentElement = document.querySelector(".criminalsContainer")

    const criminals = useCriminals()

    for (const criminalObject of criminals) {
        contentElement.innerHTML += Criminal(criminalObject)
    }
}



export default CriminalList



