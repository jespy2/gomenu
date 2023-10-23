import React from 'react';
import { Box, Grid } from '@mui/material'

import { RecipeThumbnail } from '../recipe-thumbnail/RecipeThumbnail';
import { IRecipe } from '../../index.types';

import styles from './CookbookDisplay.module.scss';

interface ICookbookDisplayProps {
  recipes: IRecipe[];
  handleRecipeSelect: (id: string) => void;
}

export const CookbookDisplay = (props: ICookbookDisplayProps) => {
  const { recipes, handleRecipeSelect } = props;

  const recipeCards = recipes.map((recipe: IRecipe) => 
    <Grid key={recipe._id} item xs={12} md={6} lg={4} onClick={() => handleRecipeSelect(recipe._id as string)}>
      <RecipeThumbnail recipe={recipe}  />
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