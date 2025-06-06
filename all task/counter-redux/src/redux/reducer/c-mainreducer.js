import counter from "./c-reducer";
import { combineReducers  } from "redux";
const rootCounter = combineReducers ({ counter })

export default rootCounter