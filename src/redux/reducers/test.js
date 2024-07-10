import { TEST } from "../actionTypes";

const initialState = { test: "null" };

export const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST:
			return {
				...state,
				test: action.payload,
			};
		default:
			return state;
	}
};
