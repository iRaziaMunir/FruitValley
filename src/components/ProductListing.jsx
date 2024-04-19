import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setProductType, setFilteredProducts } from "../features/product/productListingSlice";
import ProductItem from "./ProductItem";

const ProductListing = ({searchKeyword}) => {

	// const [productType, setProductType] = useState(null);
	// const [productsList, setProductsList] = useState([]);
	// const [filteredProducts, setFilteredProducts] = useState([]);

	const dispatch = useDispatch();
	const productType = useSelector((state) => state.productListing.productType)
	const productList = useSelector((state) => state.productListing.productList);
	const filteredProducts = useSelector((state) => state.productListing.filteredProducts)
	// useEffect(() => {
	// 	fetch("http://localhost:3000/products?_page=1")
	// 	.then((response) => response.json())
	// 	.then((json) => {
	// 		setProductsList(json.data);
	// 	})
	// 	.catch((error) => { console.error("Error fetching data:", error); });
	// }, []);

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch]);

	// useEffect(() => {
  //   if (searchKeyword && searchKeyword.trim() !== "") {
  //     const filtered = productsList.filter(
  //       (product) =>
  //         product.name &&
  //         product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts(productsList);
  //   }
  // }, [searchKeyword, productsList]);

	useEffect(() => {
		if (searchKeyword && searchKeyword.trim() !== "") {
			const filtered = productList.filter(
				(product) =>
					product.name &&
					product.name.toLowerCase().includes(searchKeyword.toLowerCase())
			);
			dispatch(setFilteredProducts(filtered)); // Dispatch action to update filtered products in the Redux store
		} else {
			dispatch(setFilteredProducts(productList)); // Dispatch action to update filtered products with the original list in the Redux store
		}
	}, [searchKeyword, productList, dispatch]);

  const productItems = () => {
    return productType === null
      ? filteredProducts 
      : filteredProducts .filter((product) => product.type === productType);
  };

	// const productItems = () => {
	// 	return productType == null
	// 		? productsList
	// 		: productsList.filter((product) => product.type == productType);
	// };

	return (
<>
<div className="w-[100%] bg-gray-100 py-20">
	<div className="organicProduct-top flex md:flex-nowrap flex-wrap items-center justify-evenly mt-40">
		<div className="heading pb-10 md:pb-0">
			<h1 className=" text-[#45595b] text-5xl font-semibold">
				Our Organic Products
			</h1>
		</div>
		<div className="productTabs">
			<nav className="flex gap-10">
				<button
					className={`px-4 py-2 bg-[#f2f4f6] text-grey-800 text-semibold  rounded-md pointer transition transform ease-in duration-300 ${
						productType == null
							? "bg-[#ffb524] text-white"
							: ""
					}`}
					onClick={() => dispatch(setProductType(null))}
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
					onClick={() => dispatch(setProductType("vegetable"))}
				>
					Vegetables
				</button>
				<button
					className={`px-4 py-2 bg-[#f2f4f6]  text-grey-800 text-semibold  rounded-md pointer transition transform ease-in duration-300
						${productType == "fruit" ? "bg-[#ffb524] text-white" : ""}`}
					onClick={() => dispatch(setProductType("fruit"))}
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
