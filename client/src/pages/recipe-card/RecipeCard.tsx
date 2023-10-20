import React, { useState, useEffect } from "react";
import { Box, Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";
import { IRecipe } from '../../index.types';
import { jsonldConvertor } from "../../utils/utils";
import styles from "./RecipeCard.module.scss";

export const RecipeCard = () => {

	return (
    <Container disableGutters={true} maxWidth={false} >
      <Grid container sx={{ height: "100%"}} columns={16} >
					<Grid item xs={3}>
						<Navbar>some stuff</Navbar>
					</Grid>
					<Grid item xs={13}>
						Main Display
					</Grid>
				</Grid>

		</Container>
	);
};
