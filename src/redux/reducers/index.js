// reducers.js
import { combineReducers } from "redux";
import { addItems } from "./additems";

const rootReducer = combineReducers({
  addItems,
});

export default rootReducer;
