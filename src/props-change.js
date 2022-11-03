import { useEffect, memo } from "react";

let count = 0;

const PropsChange = ({ number }) => {
	useEffect(() => {
		console.log("render PropsChange", count++);
	});

	return <div>Props Change {number}</div>;
};

export default memo(PropsChange);
