import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductListing = () => {
	const [productType, setProductType] = useState(null);
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/products?_page=1")
		.then((response) => response.json())
		.then((json) => {
			setProductsList(json.data);
		})
		.catch((error) => { console.error("Error fetching data:", error); });
	}, []);

	const productItems = () => {
		return productType == null
			? productsList
			: productsList.filter((product) => product.type == productType);
	};

	return (
<>
<div className="w-[100%] px-40">
	<div className="organicProduct-top flex justify-between px-32 items-center">
		<div className="heading">
			<h1 className=" text-[#45595b] text-5xl font-semibold">
				Our Organic Products
			</h1>
		</div>
		<div className="productTabs ">
			<nav className="flex gap-10">
				<button
					className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-md pointer transition transform ease-in duration-300 ${
						productType == null
							? "bg-[#ffb524] text-white"
							: ""
					}`}
					onClick={() => setProductType(null)}
				>
					All
				</button>
				<button
					className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-md pointer transition transform ease-in duration-300
						${
			productType == "vegetable"
				? "bg-[#ffb524] text-white"
				: ""
		}`}
					onClick={() => setProductType("vegetable")}
				>
					Vegetables
				</button>
				<button
					className={`px-4 py-2 bg-[#f2f4f6]  text-grey-800 text-semibold  rounded-md pointer transition transform ease-in duration-300
						${productType == "fruit" ? "bg-[#ffb524] text-white" : ""}`}
					onClick={() => setProductType("fruit")}
				>
					Fruits
				</button>
			</nav>
		</div>
	</div>
	<div className="organicProduct-bottom rounded-md mt-16 flex gap-4 flex-wrap justify-center ">
		{productItems().map((item, index) => {
			return <ProductItem item={item} key={index} />;
		})}
	</div>
</div>
</>
);
};

export default ProductListing;
