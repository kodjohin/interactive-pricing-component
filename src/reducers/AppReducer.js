export const AppReducer = (state, action) => {
	switch (action.type) {
		case "RANGE":
			return {
				...state,
				range: action.payload,
			};
		case "PRICE":
			return {
				...state,
				price:
					state.billing === "yearly"
						? action.payload - action.payload * 0.25
						: action.payload,
			};
		case "BILLING":
			return {
				...state,
				billing: action.payload,
			};
		default:
			return state;
	}
};
