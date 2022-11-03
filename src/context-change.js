import { useEffect, memo, useContext } from "react";
import { renderContext } from "./App";

let count = 0;

const ContextCange = () => {
	const context = useContext(renderContext);
	useEffect(() => {
		console.log("render ContextCange", count++);
	});

	return <div>Context Change {context.value}</div>;
};

export default memo(ContextCange);
