import { createContext, useReducer } from "react";
import { AppReducer } from "./reducers/AppReducer";

//***** Initial state */
const initialState = {
	range: 5,
	price: 8,
	billing: "monthly",
};
//****** Create context */
export const Context = createContext(initialState);

//****** Provider component */
export const AppStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//****** Actions */
	const setRange = (value) => {
		dispatch({
			type: "RANGE",
			payload: value,
		});
	};
	const setPrice = (value) => {
		dispatch({
			type: "PRICE",
			payload: value,
		});
	};
	const setBilling = (value) => {
		dispatch({
			type: "BILLING",
			payload: value,
		});
	};

	return (
		<Context.Provider
			value={{
				range: state.range,
				price: state.price,
				billing: state.billing,
				setRange,
				setPrice,
				setBilling,
			}}
		>
			{children}
		</Context.Provider>
	);
};
