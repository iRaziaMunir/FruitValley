import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";


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
			<Routing />
			<Footer />
			</div>	
		</>
		
	);
};

export default App;
