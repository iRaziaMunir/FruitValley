import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";

const Header = () => {
	return (
		<div>
			<div className="main-hero-container w-full pt-[100px] pb-[50px] relative">
				<img
					className=" w-full h-[550px] object-cover brightness-25"
					src="../images/hero-img.jpg"
					alt="Hero image"
				/>
				<div className="hero-sub-container w-full h-[550px] p-60  flex justify-center items-center absolute top-[100px]">
					<div className="hero-left-container  w-[784px] h-[341px] pl-10">
						<h4 className="text-[24px] text-[#ffb524] font-semibold mb-4">
							Welcome to FruitValley
						</h4>
						<h1 className=" text-[#81c408] text-[4rem] font-bold mb-[50px]">
							Fresh Products
						</h1>
						{/* <div className="hero-right-container   h-14  rounded-full bg-white-100 flex justify-between border-0 border-[#ffb524]"> */}
							{/* <input className='bg-white-100 max-w-md px-3 outline-none rounded-full ' type="text" placeholder='Search' /> */}
							<NavLink to={'/store'} className = ''>
							<button className="rounded-md max-w-md hover:bg-[#ffb524] bg-grey-100 text-slate-900 hover:text-[#fff] font-medium text-xm  px-5 py-3 border-2 border-[#ffb524] transition transform ease-in duration-300">
								Shop Now
							</button>
							</ NavLink>
						{/* </div> */}
					</div>
					<Carousel />
				</div>
			</div>
		</div>
	);
};

export default Header;
