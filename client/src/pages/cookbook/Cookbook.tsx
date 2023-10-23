import React, { useState, useEffect } from "react";
import { Box, Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";
import { IRecipe } from '../../index.types';
import styles from "./Cookbook.module.scss";
import { CookbookDisplay } from "../../components/cookbook-display/CookbookDisplay";

export const Cookbook = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [userName, setUserName] = useState<string>('admin');
	const [recipe, setRecipe] = useState<IRecipe | undefined>();
	const [allRecipes, setAllRecipes] = useState<IRecipe[] | undefined>([]);
	const [userURL, setUserURL] = useState<string>();

	useEffect(() => {
			!isMounted && (async () => {
			await apis.getAllRecipes()
				.then((data) => {
					setAllRecipes(data.data as IRecipe[]);
					console.log("data: ", data);
					console.log("allRecipes: ", allRecipes);
					setIsMounted(true);
				});
			})();
	}, []);

	

	return (
		<Container disableGutters={true} maxWidth={false} >
				<Grid container sx={{ height: "100%"}} columns={16} >
					<Grid item xs={3}>
						<Navbar />
					</Grid>
					<Grid item xs={13}>
						<CookbookDisplay recipes={allRecipes ? allRecipes : []} />
					</Grid>
				</Grid>
		</Container>
	);
};
