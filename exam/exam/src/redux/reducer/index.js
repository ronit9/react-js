import { combineReducers } from "redux";
import AuthReduceer from "./AuthReduceer";

const rootreducer = combineReducers({
    alldata: AuthReduceer
})
export default rootreducer