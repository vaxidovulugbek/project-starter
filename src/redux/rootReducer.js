// rootReducer.js
import { combineReducers } from "redux";
import { testReducer } from "./reducers";

const rootReducer = combineReducers({
	testReducer,
});

export default rootReducer;
