import { useEffect, memo } from "react";

let count = 0;

const FunctionProps = ({ onClick }) => {
	useEffect(() => {
		console.log("render FunctionProps", count++);
	});

	return <div>Function Props</div>;
};

export default memo(FunctionProps);
