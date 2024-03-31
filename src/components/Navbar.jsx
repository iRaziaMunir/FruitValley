// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoSearch } from "react-icons/io5";
// import { FaShoppingBag } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {
// 	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

// 	return (
// 		<>
// 			<div className="w-full h-[100px] px-5 sm:bg-[#fff] bg-gray-200 md:bg-green-200 flex items-center gap-10 shadow-md fixed z-40 ">
//       <NavLink to="./">
// 						<h1 className=" logo text-4xl md:text-2xl sm:text-xl font-bold text-lime-500">
// 							FruitValley
// 						</h1>
// 					</NavLink>
// 				<nav className="w-full flex items-center justify-between bg-red-100  sm:invisible lg:visible">
// 					{/* <NavLink to="./">
// 						<h1 className=" logo text-4xl md:text-2xl sm:text-xl font-bold text-lime-500">
// 							FruitValley
// 						</h1>
// 					</NavLink> */}
// 					<div className="text-zinc-400 text-md bg-blue-200 flex gap-5">
// 						<NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/"
// 						>
// 							Home
// 						</NavLink>
// 						<NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/store"
// 						>
// 							Store
// 						</NavLink>
// 						{/* <NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/shopdetail"
// 						>
// 							Shop Detail
// 						</NavLink> */}
// 						{/* <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }} to="/pages" className='relative'>Page<RiArrowDropDownLine className=' absolute left-[100%] top-1 text-bold text-2xl'/>
//                         <div className='bg-zinc-100 pr-10 pl-4 py-2 rounded leading-9 text-left mt-[100%] top-[5%] absolute flex justify-center  items-center flex-col invisible hover:visible'>
//                             <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }}>Cart</NavLink>
//                             <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }}>CheckOut</NavLink>
//                             <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }}>Testimonials</NavLink>
//                             <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }}>404 Page </NavLink>
//                         </div>
//                     </NavLink> */}
// 						<NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/contact"
// 						>
// 							Contact
// 						</NavLink>
// 						<NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/checkout"
// 						>
// 							CheckOut
// 						</NavLink>
// 					</div>
// 					<div className="text-zinc-400 bg-pink-200 flex gap-2">
// 						<div className="w-60 h-10 bg-zinc-100 flex justify-center items-center rounded-full outline outline-2 outline-[#ffb524]">
// 							<input
// 								type="text"
// 								className="bg-zinc-100 outline outline-0 left-0 text-zinc-500"
// 							/>
// 							<IoSearch className=" text-lime-500 text-xl" />
// 						</div>
// 						<NavLink
// 							style={(e) => {
// 								return {
// 									color: e.isActive ? "#ffb254" : "",
// 									fontWeight: e.isActive ? "bold" : "",
// 								};
// 							}}
// 							to="/cart"
// 							className="text-gray text-xl mt-2 "
// 						>
// 							<FaShoppingBag />
// 						</NavLink>
// 						{/* <NavLink style={(e)=>{
//                         return{color: e.isActive ? "#ffb254" : "", fontWeight: e.isActive ? 'bold' : '',};
//                     }} to='/user' className='user-icon text-lime-500 text-2xl mt-2 '>
//                     <button onClick={() => loginWithRedirect()}><FaUser/></button>
//                     </NavLink> */}
// 						{isAuthenticated && (user.name || user.email)}
// 						{isAuthenticated ? (
// 							<button
// 								className="hover:text-[#ffb254]  text-md text-center border-1 px-3"
// 								onClick={() =>
// 									logout({
// 										logoutParams: {
// 											returnTo: window.location.origin,
// 										},
// 									})
// 								}
// 							>
// 								Log Out
// 							</button>
// 						) : (
// 							<button
// 								className="hover:text-[#ffb254] text-md text-center border-1 px-3"
// 								onClick={() => loginWithRedirect()}
// 							>
// 								Log In
// 							</button>
// 						)}
// 					</div>
// 				</nav>
// 			</div>
// 		</>
// 	);
// };

// export default Navbar;
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  // Auth0 hook
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', path: './' },
    { id: 2, text: 'Store', path: '/store'},
    { id: 3, text: 'CheckOut' , path: '/checkout'},
    { id: 4, text: 'Contact' , path: '/contact'},
    // { id: 5, text: <FaShoppingBag /> , path: '/cart'},
    // { id: 6, text: < IoSearch/> , path: '/cart'}
  ];

  return (
    <div className='bg-[#fff] border-b-2 shadow-md flex justify-around items-center h-24  w-full mx-auto px-4 text-white fixed z-40'>
      {/* Logo */}
      <NavLink to="./">
        <h1 className=" logo text-3xl md:text-2xl sm:text-xl font-bold text-lime-500">
					FruitValley
				</h1>
			</NavLink>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex'>
        {navItems.map(item => (

        <NavLink className="text-xl px-2 py-4 rounded-xl m-2 cursor-pointer duration-300 text-[#ffb524]"
        style={(e) => {
        return {
        color: e.isActive ? "#81c408" : "",
        fontWeight: e.isActive ? "bold" : "",
        };
        }}
        to={item.path}>
        {item.text}
        </NavLink>
        ))}
        <div className="text-zinc-400 mt-1 flex gap-10 items-center">
        <NavLink className=" text-xl px-2 py-4 rounded-xl m-2 cursor-pointer duration-300 text-[#ffb524] relative"
        style={(e) => {
        return {
        color: e.isActive ? "#81c408" : "",
        fontWeight: e.isActive ? "bold" : "",
        };
        }}
        to='/cart'>
        <FaShoppingBag />
        </NavLink>
        <span className='bg-[#ffb524] text-white text-sm w-8 h-8 flex items-center justify-center rounded-full absolute top-3 right-[23%]'></span>
           {/* {isAuthenticated && (user.name || user.email)} */}
						{isAuthenticated ? (
 							<button
 								className="hover:text-[#ffb254]  text-md text-center border-1 border-[#ffb524] px-3 py-2"
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
 								className="hover:text-[#ffb254] text-md text-center border-1 border-[#ffb524] px-3 py-2"
 								onClick={() => loginWithRedirect()}
 							>
 								Log In
 							</button>
 						)}
          </div>
          
      </nav>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className = 'text-[#ffb524]'/> : <AiOutlineMenu size={20} className = 'text-[#ffb524]'/>}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-gray-100 ease-in-out duration-500 z-40'
            : 'ease-in-out fixed w-100 duration-500  top-0 bottom-0 left-[100%]'
        }
      >
        {/* Mobile Logo */}
        <NavLink to="./">
        <h1 className=" logo text-4xl md:text-2xl sm:text-xl font-bold text-lime-500">
					FruitValley
				</h1>
			</NavLink>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          // <li
          //   key={item.id}
          //   className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          // >
          //   {item.text}
          // </li>
        <NavLink className="px-2 py-4 rounded-xl m-2 cursor-pointer duration-300 text-[#ffb524] block"
        style={(e) => {
        return {
        color: e.isActive ? "#81c408" : "",
        fontWeight: e.isActive ? "bold" : "",
        };
        }}
        to={item.path}>
        {item.text}
        </NavLink>
        ))}
      </div>
    </div>
  );

};

export default Navbar;