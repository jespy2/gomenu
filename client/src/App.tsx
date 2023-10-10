import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./styles/index.scss";

function App() {
	return (
		<Router>
			<div className='App'>
				<section>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*'>{/* <NotFound /> */}</Route>
					</Routes>
				</section>
			</div>
		</Router>
	);
}

export default App;
