import { useEffect } from "react";
import Product from "./Product";
import { useFilterContext } from "../context/Filter_Context";

const MainProductsList = () => {
	const { filter_products } = useFilterContext();

	return (
		<>
			<div className="grid grid-col-3">
				{filter_products &&
					filter_products.map((product, index) => {
						return <Product {...product} key={index} />;
					})}
			</div>
		</>
	);
};

export default MainProductsList;
