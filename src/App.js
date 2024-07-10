import React from "react";
import "./App.css";
import { useSelectors } from "./hooks/useSelectors";
import { Button } from "./ui/Button/Button";

function App() {
	const { test } = useSelectors();
	return (
		<div className="text-red-700">
			hello {test} <Button innerText="textjjj"></Button>
		</div>
	);
}

export default App;
