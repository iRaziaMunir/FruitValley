import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	
		<Auth0Provider
			domain="dev-5b1ej8jgnwh3b8ze.us.auth0.com"
			clientId="ihlWKUUc1x25zQB89P6qNuKLkM3uDPnl"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
				<BrowserRouter>
				<Provider store={store}>
				<App />
				</Provider>
				</BrowserRouter>
		</Auth0Provider>
	
);
