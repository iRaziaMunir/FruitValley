import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

const App = () => {
	const [dataFromCart, setDataFromCart] = useState('');
	const receiveDataFromCart = (data) => {
    setDataFromCart(data);
  };
	return (
		
		<>
		<div className="">
			
			<Navbar sendDataToApp = {receiveDataFromCart}/>
			{/* <Header /> */}
			<Link to="https://wa.me/03097949844">
			<div className="w-20 h-20"><ImWhatsapp className=" w-16 h-16 fixed bottom-10 left-10 text-green-500 z-1"></ImWhatsapp></div>
			</Link>
			<Routing />
			<Footer />
			</div>	
		</>
		
	);
};

export default App;
