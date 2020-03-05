import Criminal from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";

const contentElement = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    const criminals = useCriminals()
    // for (const criminalObject of criminals) {
    //     contentElement.innerHTML += Criminal(criminalObject)
    // }
    criminals["0"].forEach(criminalObject => {
        contentElement.innerHTML += Criminal(criminalObject)
        
    });
}



export default CriminalList



