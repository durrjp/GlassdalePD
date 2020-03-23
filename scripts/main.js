import { getCriminals} from "./criminals/CriminalDataProvider.js";
import {CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionDataProvider.js";
import NoteForm from "./notes/noteForm.js";
import initializeDetailButtonEvents from "./alibis/alibi.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import "./notes/noteList.js"
import "./witnesses/witnessList.js"
import { DisplayWitnessButton } from "./witnesses/witnessButton.js";
// import { getWitnesses } from "./witnesses/witnessProvider.js";
// import { WitnessList } from "./witnesses/witnessList.js";
import { NoteList } from "./notes/noteList.js";

NoteForm()
NoteList()
getCriminals().then(CriminalList).then(initializeDetailButtonEvents)
getConvictions().then(ConvictionSelect).then(initializeDetailButtonEvents)
// getWitnesses().then(WitnessList)

DisplayNoteFormButton()
DisplayNotesButton()
DisplayWitnessButton()