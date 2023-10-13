import React, { useState, useEffect } from "react";

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
		recipe && console.log('intructions: ', instructionsConvertor(recipe.recipeInstructions))
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
		<div className={styles.homeContainer}>
			<Navbar setUserURL={setUserURL} />
			<MainDisplay recipe={recipe} />
		</div>
	);
};
