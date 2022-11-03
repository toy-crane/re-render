import { useEffect, memo } from "react";

let count = 0;

const ParentChangeWithMemo = () => {
	useEffect(() => {
		console.log("render ParentChangeWithMemo", count++);
	});

	return <div>with Parent</div>;
};

export default memo(ParentChangeWithMemo);
