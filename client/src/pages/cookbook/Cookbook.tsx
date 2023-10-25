import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Modal} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import {Footer } from "../../components/footer/Footer";
import { CookbookDisplay } from "../../components/cookbook-display/CookbookDisplay";
import { RecipeCard } from "../../components/recipe-card/RecipeCard";

import apis from "../../api";
import { IRecipe } from '../../index.types';
import styles from "./Cookbook.module.scss";

export const Cookbook = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [recipe, setRecipe] = useState<IRecipe | undefined>();
	const [allRecipes, setAllRecipes] = useState<IRecipe[] | undefined>([]);
	const [showRecipeModal, setShowRecipeModal] = useState<boolean>(false);

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

	const handleRecipeSelect = (id: string) => {
		console.log("handleRecipeSelect: ", id);
		setRecipe(allRecipes?.find((recipe) => recipe._id === id));
		setShowRecipeModal(true);
	}

	const handleCloseModal = () => setShowRecipeModal(false);

	return (
		<Container disableGutters={true} maxWidth={false} >
			<Grid container sx={{ height: "100%"}} columns={16} >
				<Grid item xs={3}>
					<Navbar>
						<Footer />
					</Navbar>
				</Grid>
				<Grid item xs={13}>
					<Modal open={showRecipeModal} onClose={handleCloseModal} >
						<Box className={styles.cookbookModal} >
							<RecipeCard recipe={recipe} />
						</Box>						
					</Modal>
					<CookbookDisplay recipes={allRecipes ? allRecipes : []} handleRecipeSelect={handleRecipeSelect} />
				</Grid>
			</Grid>
		</Container>
	);
};
