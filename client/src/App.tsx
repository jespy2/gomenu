import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Home } from "./pages/home/Home";
import { Start } from "./pages/start/Start";
import { RecipeCard } from "./pages/recipe-card/RecipeCard";
import { Cookbook } from "./pages/cookbook/Cookbook";

import { IRecipe } from "./index.types";
import apis from "./api";

import "./styles/index.scss";
import { NewRecipe } from "./pages/new-recipe/NewRecipe";

declare module '@mui/material/styles' {
	interface Theme {
	palette: {
		primary: {
			light: string;
			main: string;
			dark: string;
			contrastText: string;
		},
		secondary: {
			light: string;
			main: string;
			dark: string;
			contrastText: string;
		},
	},
}
}

  // interface ThemeOptions {
  //   palette: {
	// 		primary: {
	// 			light: string;
	// 			main: string;
	// 			dark: string;
	// 			contrastText: string;
	// 		},
	// 		secondary: {
	// 			light: string;
	// 			main: string;
	// 			dark: string;
	// 			contrastText: string;
	// 		},
	// 	},
  // }

const theme = createTheme({
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					padding: '0',
					margin: '0',
					width: '100%',
					height: '100vh',
				}
			}
		}
	},
  palette: {
    primary: {
      light: '#bdebf0',
      main: '#5D979F',
      dark: '#495f5f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#edc5be',
      main: '#9f655d',
      dark: '#4b1d20',
      contrastText: '#000',
    },
  },
});

function App() {
	const [recipe, setRecipe] = useState<IRecipe | undefined>();
	const [userURL, setUserURL] = useState<string | undefined>();
	const [userName, setUserName] = useState<string>('admin');

	return (
			<ThemeProvider theme={theme}>
				<Router>
					<div className='App'>
						<section>
							<Routes>
							<Route
								path='/'
								element={
									<Start
										setUserURL={setUserURL}
										userURL={userURL}
										setRecipe={setRecipe}
										userName={userName}
									/>
								}
							/>
							<Route path='/newrecipe' element={<NewRecipe recipe={recipe} />} />
							{/* <Route path='/cookbook' element={<Cookbook recipe={recipe} />} /> */}
							{/* <Route path='/recipecard' element={<RecipeCard recipe={recipe} />} /> */}
								<Route path='*'>{/* <NotFound /> */}</Route>
							</Routes>
						</section>
					</div>
				</Router>
			</ThemeProvider>
	);
}

export default App;
