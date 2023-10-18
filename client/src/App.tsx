import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Home } from "./pages/home/Home";
import "./styles/index.scss";

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

  interface ThemeOptions {
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
	return (
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
	);
}

export default App;
