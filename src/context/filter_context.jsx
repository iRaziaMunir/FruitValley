import { createContext, useReducer, useEffect, useContext } from "react";
import { useProductContext } from "./ProductContext";

import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
	filter_products: [],
	all_products: [],
};
export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContext();
	console.log(products, "Myproducts");
	const [state, dispatch] = useReducer(filterReducer, initialState);

	useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);


	return (
		<FilterContext.Provider value={{ ...state }}>
			{children}
		</FilterContext.Provider>
	);
};
//custom hook
export const useFilterContext = () => {
	return useContext(FilterContext);
};
const filter_context = () => {
	return <></>;
};
export default filter_context;

