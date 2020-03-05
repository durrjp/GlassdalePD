import { getCriminals} from "./criminals/CriminalDataProvider.js";
import CriminalList from "./criminals/CriminalList.js";

getCriminals().then(
    CriminalList
)
