import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import getgeeta from "./reducer/geetaindex";
const store = createStore(getgeeta, applyMiddleware(thunk))

export default store