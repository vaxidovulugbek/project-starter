import { TEST } from "../actionTypes";

const testAction = (templateId) => ({
	type: TEST,
	payload: templateId,
});

export const testReduxAction = { testAction };
