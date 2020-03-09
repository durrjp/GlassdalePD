import { getCriminals} from "./criminals/CriminalDataProvider.js";
import CriminalList from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionDataProvider.js";

getCriminals().then(
    CriminalList
)
getConvictions().then(
    ConvictionSelect
)
