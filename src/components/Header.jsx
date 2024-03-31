import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import { IoSearch } from "react-icons/io5";


const Header = () => {
	return (
		<>
			<div className="main-hero-container py-1 ">
				<div className="main-hero-container relative mt-2 w-full h-screen">
				<div className=" w-72 h-10 bg-zinc-100 flex gap-20 items-center rounded-md outline outline-2 outline-[#ffb524] top-[100px] absolute text-center ml-10">
            <input
            type="text"
            className="bg-zinc-100 outline outline-0  text-zinc-500"
            />
          <IoSearch className=" text-lime-500 text-xl " />
           </div>
				<div className="hero-sub-container w-full h-[550px] flex sm:flex-nowrap flex-wrap  lg:gap-0 gap-2 justify-evenly items-center top-[100px] absolute p-12">
				
					<div className="hero-left-container  w-[784px] h-[341px] lg:text-start text-center">
						<h4 className="text-[24px] text-[#ffb524] font-semibold my-4">
							Welcome to FruitValley
						</h4>
						<h1 className=" text-[#81c408] text-[4rem] font-bold mb-[50px]">
							Fresh Products
						</h1>
							<NavLink to={'/store'} className = ''>
							<button className="rounded-md max-w-md hover:bg-[#ffb524] bg-grey-100 text-slate-900 hover:text-[#fff] font-medium text-xm  px-5 py-3 border-2 border-[#ffb524] transition transform ease-in duration-300">
								Shop Now
							</button>
							</ NavLink>
					</div>
					<div>
					<Carousel />
					</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
