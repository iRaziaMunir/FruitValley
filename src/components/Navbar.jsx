import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	return (
		<>
			<div className="w-full mx-auto  h-[100px] bg-[#fff] flex shadow-md fixed z-40 ">
				<nav className="w-full flex justify-between items-center px-40 ">
					<NavLink
						// style={(e)=>{
						//     return{color:e.isActive ? 'green' : '',};
						// }}
						to="./"
					>
						<h1 className=" logo text-4xl md:text-2xl sm:text-xl font-bold text-lime-500">
							FruitValley
						</h1>
					</NavLink>
					<div className="text-zinc-400 text-md flex gap-10 ">
						<NavLink
							style={(e) => {
								return {
									color: e.isActive ? "#ffb254" : "",
									fontWeight: e.isActive ? "bold" : "",
								};
							}}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							style={(e) => {
								return {
									color: e.isActive ? "#ffb254" : "",
									fontWeight: e.isActive ? "bold" : "",
								};
							}}
							to="/store"
						>
							Store
						</NavLink>
						{/* <NavLink
							style={(e) => {
								return {
									color: e.isActive ? "#ffb254" : "",
									fontWeight: e.isActive ? "bold" : "",
								};
							}}
							to="/shopdetail"
						>
							Shop Detail
						</NavLink> */}
						{/* <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }} to="/pages" className='relative'>Page<RiArrowDropDownLine className=' absolute left-[100%] top-1 text-bold text-2xl'/>
                        <div className='bg-zinc-100 pr-10 pl-4 py-2 rounded leading-9 text-left mt-[100%] top-[5%] absolute flex justify-center  items-center flex-col invisible hover:visible'>
                            <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }}>Cart</NavLink>
                            <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }}>CheckOut</NavLink>
                            <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }}>Testimonials</NavLink>
                            <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }}>404 Page </NavLink>
                        </div>
                    </NavLink> */}
						<NavLink
							style={(e) => {
								return {
									color: e.isActive ? "#ffb254" : "",
									fontWeight: e.isActive ? "bold" : "",
								};
							}}
							to="/contact"
						>
							Contact
						</NavLink>
					</div>
					<div className="text-zinc-400 flex gap-10">
						<div className="w-60 h-10 bg-zinc-100 flex justify-center items-center rounded-full outline outline-1 outline-[#ffb524]">
							<input
								type="text"
								className="bg-zinc-100 outline outline-0 left-0 text-zinc-500"
							/>
							<IoSearch className=" text-lime-500 text-xl" />
						</div>
						<NavLink
							style={(e) => {
								return {
									color: e.isActive ? "#ffb254" : "",
									fontWeight: e.isActive ? "bold" : "",
								};
							}}
							to="/cart"
							className="text-gray text-xl mt-2 "
						>
							<FaShoppingBag />
						</NavLink>
						{/* <NavLink style={(e)=>{
                        return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
                    }} to='/user' className='user-icon text-lime-500 text-2xl mt-2 '>
                    <button onClick={() => loginWithRedirect()}><FaUser/></button>
                    </NavLink> */}
						{isAuthenticated && (user.name || user.email)}
						{isAuthenticated ? (
							<button
								className="hover:text-[#ffb254]  text-md text-center border-[#ffb524] border-1 px-3"
								onClick={() =>
									logout({
										logoutParams: {
											returnTo: window.location.origin,
										},
									})
								}
							>
								Log Out
							</button>
						) : (
							<button
								className="hover:text-[#ffb254] text-md text-center border-[#ffb524] border-1 px-3"
								onClick={() => loginWithRedirect()}
							>
								Log In
							</button>
						)}
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
