import { createStore } from "redux";
import rootreducer from "./reducers/crud-index";

const store = createStore(rootreducer);

export default store;