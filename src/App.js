import React, {
	createContext,
	useCallback,
	useEffect,
	useState,
	useMemo,
} from "react";
import ContextChange from "./context-change";
import FunctionProps from "./function-props";
import ObjectProps from "./object-props";
import ParentChange from "./parent-change";
import ParentChangeWithMemo from "./parent-change-with-memo";
import PropsChange from "./props-change";
import useCustomHooks from "./use-custom-hooks";

let count = 0;

export const renderContext = createContext();

function App() {
	const [number, setNumber] = useState(0);
	const { onClick } = useCustomHooks();

	useEffect(() => {
		setTimeout(() => {
			setNumber(2);
		}, 3000);
	});

	useEffect(() => {
		console.log("render app Component", count++);
	});

	const people = useMemo(() => {
		return { name: "hanwool" };
	}, []);

	return (
		<div>
			hello
			<ParentChange />
			<ParentChangeWithMemo />
			<PropsChange number={number} />
			<renderContext.Provider value={number}>
				<ContextChange />
			</renderContext.Provider>
			<FunctionProps onClick={onClick} />
			<ObjectProps people={people} />
		</div>
	);
}

export default App;
