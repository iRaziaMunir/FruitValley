import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import {AppProvider} from './context/ProductContext'
// import { AppContext } from "./context/ProductContext";

const App = () => {
	return (
		
		<>
		
			<Navbar />
			<Header />
			<Routing />
			<Footer />
		</>
		
	);
};

export default App;
