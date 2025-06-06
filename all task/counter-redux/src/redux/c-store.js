import rootCounter from "./reducer/c-mainreducer";
import { createStore } from "redux";
const store = createStore(rootCounter) 

export default store