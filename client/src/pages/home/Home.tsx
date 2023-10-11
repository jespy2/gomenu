import React, { useState, useEffect } from "react";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";
import { IRecipe } from '../../index.types';
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
		<div className={styles.homeContainer}>
			<Navbar setUserURL={setUserURL} />
			<MainDisplay recipe={recipe} />
		</div>
	);
};
