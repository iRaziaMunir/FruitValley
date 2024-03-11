import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductListing = () => {
	const [productType, setProductType] = useState(null);
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		fetch("/server/database/products.json")
			.then((response) => response.json())
			.then((data) => {
				setProductsList(data); // Update state with the fetched data
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const productItems = () => {
		return productType == null
			? productsList
			: productsList.filter((product) => product.type == productType);
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
									productType == null
										? "bg-[#ffb524] text-white"
										: ""
								}`}
								onClick={() => setProductType(null)}
							>
								All
							</button>
							<button
								className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-full pointer
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
						return <ProductItem item={item} key={item.id} />;
					})}
				</div>
			</div>
		</>
	);
};

export default ProductListing;
