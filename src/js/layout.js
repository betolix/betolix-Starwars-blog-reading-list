import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Homepage from "./views/homePage";
import CharacterDetails from "./views/characterDetails"
import  VehicleDetails from "./views/vehicleDetails"
import  PlanetDetails from "./views/planetDetails"

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route path="/character-details/:name/" element={<CharacterDetails />} />
						<Route path="/vehicle-details/:name/" element={<VehicleDetails />} />
						<Route path="/planet-details/:name/" element={<PlanetDetails />} />	
						{/* <Route path="*" element={<Error/>} /> */}
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
