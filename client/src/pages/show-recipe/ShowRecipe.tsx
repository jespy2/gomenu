import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";
import { RecipeCard } from '../../components/recipe-card/RecipeCard'

import apis from "../../api";
import { IRecipe } from '../../index.types';
import styles from "./ShowRecipe.module.scss";

export const ShowRecipe = ({ recipe }: { recipe: IRecipe | undefined }) => {
	const navigate = useNavigate();

	return (
    <Container disableGutters={true} maxWidth={false} >
      <Grid container sx={{ height: "100%"}} columns={16} >
				<Grid item xs={3}>
          <Navbar>
            <Button onClick={() => navigate('/')} >Home</Button>
          </Navbar>
				</Grid>
				<Grid item xs={13}>
					<MainDisplay>
						<RecipeCard recipe={recipe} />
					</MainDisplay>
				</Grid>
			</Grid>
		</Container>
	);
};
