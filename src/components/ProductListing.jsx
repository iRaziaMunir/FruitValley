import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";

const organicProductData = [
	{
		type: "vegetable",
		image: "../images/fruite-item-1.jpg",
		name: "Oranges",
		description:
			" Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
		price: "$4 / kg",
	},
	{
		type: "fruit",
		image: "../images/fruite-item-2.jpg",
		name: "Raspberries",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
		price: "$4 / kg",
	},
	{
		type: "vegetable",
		image: "../images/fruite-item-3.jpg",
		name: "Bananas",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
		price: "$4 / kg",
	},
	{
		type: "vegetable",
		image: "../images/fruite-item-4.jpg",
		name: "Apricots",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
		price: "$4 / kg",
	},
	{
		type: "vegetable",
		image: "../images/fruite-item-5.jpg",
		name: "Grapes",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
		price: "$4 / kg",
	},
];

const ProductListing = () => {
	const [productType, setProductType] = useState(null);

	const productItems = () => {
		return productType == null
			? organicProductData
			: organicProductData.filter(
					(product) => product.type == productType
			  );
	};

	return (
		<>
			<div className="w-[80%]   mx-40 p-20">
				<div className="organicProduct-top flex justify-between items-center">
					<div className="heading">
						<h1 className=" text-[#45595b] text-5xl font-semibold">
							Our Organic Products
						</h1>
					</div>
					<div className="productTabs ">
						<nav className="flex gap-10">
							<button
								className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-full pointer ${
									productType == null ? "bg-[#ffb524] text-white" : ""
								}`}
								onClick={() => setProductType(null)}
							>
								All
							</button>
							<button
								className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-full pointer
                 ${productType == "vegetable" ? "bg-[#ffb524] text-white" :""}`}
								onClick={() => setProductType("vegetable")}
							>
								Vegetables
							</button>
							<button
								className={`px-4 py-2 bg-[#f2f4f6]  text-grey-800 text-semibold  rounded-full pointer
                 ${productType == "fruit" ? "bg-[#ffb524] text-white" : ""}`}
								onClick={() => setProductType("fruit")}
							>
								Fruits
							</button>
						</nav>
					</div>
				</div>
				<div className="organicProduct-bottom rounded-md mt-16 flex gap-5 flex-wrap justify-center">
					{productItems().map((item, index) => {
						return <ProductItem item={item} />;
					})}
				</div>
			</div>
		</>
	);
};

export default ProductListing;
