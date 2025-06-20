import { combineReducers } from "redux";
import reducerapi from "./apireducer";
const rootreducer = combineReducers({
    postdata: reducerapi

})
export default rootreducer