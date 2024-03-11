import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
