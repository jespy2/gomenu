import React from 'react';
import { Box, Grid } from '@mui/material'

import { RecipeCard } from '../recipe-card/RecipeCard';
import { IRecipe } from '../../index.types';

import styles from './CookbookDisplay.module.scss';

export const CookbookDisplay = ({recipes}: {recipes: IRecipe[]}) => {

  const recipeCards = recipes.map((recipe: IRecipe) => 
  <Grid item xs={12} md={6} lg={4}>
    <RecipeCard recipe={recipe} />
  </Grid>
  );

  return (
    
    <Box className={styles.cookbookDisplayContainer } sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          {recipeCards}
      </Grid>
    </Box>
  )
}