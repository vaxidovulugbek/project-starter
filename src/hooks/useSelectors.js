// useResume.ts
import { useSelector } from "react-redux";
export const useSelectors = () => {
	const test = useSelector((state) => state.testReducer?.test);
	return { test };
};
