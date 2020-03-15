import { getCriminals} from "./criminals/CriminalDataProvider.js";
import {CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionDataProvider.js";
import NoteForm from "./notes/noteForm.js";
import initializeDetailButtonEvents from "./alibis/alibi.js";


NoteForm()

getCriminals().then(CriminalList).then(initializeDetailButtonEvents)

getConvictions().then(ConvictionSelect).then(initializeDetailButtonEvents)
