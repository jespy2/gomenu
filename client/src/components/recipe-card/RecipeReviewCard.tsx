import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardMedia, 
  CardContent, 
  Paper
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Ratings } from '../ratings/Ratings';

import { IRecipe } from '../../index.types';

import styles from './RecipeReviewCard.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const RecipeReviewCard = (props: IProps) => { 
  const {
    name,
    description,
    nutrition,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeCategory,
    recipeCuisine,
    recipeIngredient,
    recipeInstructions,
    selectedImage,
    cookingMethod,
    userRating,
    userComments
  } = props.recipe as IRecipe;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        name={name}
        title={name}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={selectedImage}
        alt={name}
      />
      <CardContent>
        <Typography variant="body1">Description:</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Paper>
          <Typography variant="body1">Cooking Method:</Typography>
          <Typography variant="body2" color="text.secondary">
            {cookingMethod}
          </Typography>
          <Typography variant="body1">Category:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeCategory ? recipeCategory : 'None'}
          </Typography>
          <Typography variant="body1">Cuisine Type:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeCuisine ? recipeCuisine : 'None'}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="body1">Rating:</Typography>
          <Typography variant="body2" color="text.secondary">
            {userRating}
          </Typography>
          <Typography variant="body1">Comments:</Typography>
          <Typography variant="body2" color="text.secondary">
            {userComments ? userComments : 'None'}
          </Typography>
        </Paper>


        <Paper>
          <Typography variant="body1">Prep Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {prepTime ? prepTime : 'None'}
          </Typography>
          <Typography variant="body1">Cook Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {cookTime ? cookTime : 'None'}
          </Typography>
          <Typography variant="body1">Servings:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeYield ? recipeYield : 'None'}
          </Typography>
        </Paper>
                
        </CardContent>
    </Card>
  )
};