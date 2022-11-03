import { useEffect, memo } from "react";

let count = 0;

const ObjectProps = ({ people }) => {
	useEffect(() => {
		console.log("render ObjectProps", count++);
	});

	return <div>Function Props {people?.name}</div>;
};

export default memo(ObjectProps);
