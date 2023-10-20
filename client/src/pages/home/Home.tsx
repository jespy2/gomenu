import React, { useState, useEffect } from "react";
import { Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";
import { IRecipe } from '../../index.types';
import { jsonldConvertor } from "../../utils/utils";
import styles from "./Home.module.scss";

export const Home = () => {
	const [recipe, setRecipe] = useState<IRecipe | undefined>();
	const [userURL, setUserURL] = useState<string>();

	useEffect(() => {
		userURL &&
			(async () => {
				await apis.getRecipe(userURL).then((data) => {
					const _recipe = { ...data.data }["@graph"].find(
						(recipe: any) => recipe["@type"] === "Recipe"
					);
					setRecipe(_recipe);
					console.log("data: ", data);
					console.log("_recipe: ", _recipe);
				});
			})();
	}, [userURL]);

	return (
		<Container disableGutters={true} maxWidth={false}>
			<Grid container sx={{ height: "100%"}} columns={16} >
				<Grid item xs={3}>
					{/* <Navbar setUserURL={setUserURL} /> */}
				</Grid>
				<Grid item xs={13}>
						{/* <MainDisplay recipe={recipe} handleFormSubmit={handleFormSubmit} /> */}
				</Grid>
			</Grid>
		</Container>
	);
};
