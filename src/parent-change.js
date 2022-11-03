import { useEffect } from "react";

let count = 0;

const ParentChange = () => {
	useEffect(() => {
		console.log("render ParentChange", count++);
	});

	return <div>with Parent</div>;
};

export default ParentChange;
