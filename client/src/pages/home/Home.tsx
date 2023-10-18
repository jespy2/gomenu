import React, { useState, useEffect } from "react";
import { Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";
import { IInstructionSection, IInstructionStep, IRecipe } from '../../index.types';
import { jsonldConvertor } from "../../utils/utils";
import styles from "./Home.module.scss";

export const Home = () => {
	const [recipe, setRecipe] = useState<IRecipe | undefined>();
	const [userURL, setUserURL] = useState<string>();

	

	const instructionsConvertor = (instructions: IInstructionSection[] | IInstructionStep[]) => {
		instructions.length && instructions.map((instruction) => {
			return instruction
		})
	}

	useEffect(() => {
		recipe && console.log('intructions: ', recipe.recipeInstructions)
		recipe && console.log('nutrion: ', jsonldConvertor(recipe, "nutrition"))
		recipe && console.log('recipeCategory: ', jsonldConvertor(recipe, "recipeCategory"))
		recipe && console.log('recipeIngredient: ', jsonldConvertor(recipe, "recipeIngredient"))
		recipe && console.log('recipeCuisine: ', jsonldConvertor(recipe, "recipeCuisine"))
	}, [recipe])
	

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
			<Grid
				container
				sx={{ height: "100%"}}
				columns={16}
				// direction="row"
				// justifyContent="space-between"
				// alignItems="stretch"
			>
				<Grid item xs={3}>
					<Navbar setUserURL={setUserURL} />
				</Grid>
				<Grid item xs={13}>
					<MainDisplay recipe={recipe} />
				</Grid>
			</Grid>
		</Container>
	);
};
