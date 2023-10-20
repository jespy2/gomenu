import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid } from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";
import { RecipeForm } from "../../forms/recipe-form/RecipeForm";

import { IRecipe } from "../../index.types";

import styles from "./NewRecipe.module.scss";

export const NewRecipe = ({ recipe }: { recipe: IRecipe | undefined }) => {
  const navigate = useNavigate();

	return (
		<Container disableGutters={true} maxWidth={false} >
      <Grid container sx={{ height: "100%"}} columns={16} >						
        <Grid item xs={3}>
          <Navbar>
            <Button onClick={() => navigate('/')} >Home</Button>
          </Navbar>
        </Grid>
        <Grid item xs={13} >
          <MainDisplay>
            <Box>
              <h1>Your New Recipe</h1>
            </Box>
            <RecipeForm recipe={recipe} />
          </MainDisplay>
        </Grid>
        </Grid>
		</Container>
	);
};
