import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext";
import {FilterContextProvider} from './context/filter_context';
import { Auth0Provider } from "@auth0/auth0-react";
import { CartContextProvider } from "./context/cart_context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppProvider>
		<Auth0Provider
			domain="dev-5b1ej8jgnwh3b8ze.us.auth0.com"
			clientId="ihlWKUUc1x25zQB89P6qNuKLkM3uDPnl"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<FilterContextProvider>
				<BrowserRouter>
					<CartContextProvider>
						<App />
					</CartContextProvider>
				</BrowserRouter>
			</FilterContextProvider>
		</Auth0Provider>
	</AppProvider>
);
