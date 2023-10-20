import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardHeader,
  CardMedia, 
  CardContent, 
  Paper
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import { RatingsDisplay } from '../ratings-display/RatingsDisplay'

import { IInstructionStep, INutrition, IRecipe } from '../../index.types';

import styles from './RecipeReviewCard.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const RecipeReviewCard = (props: IProps) => { 
  const [expanded, setExpanded] = useState(false);

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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const instructions = recipeInstructions as IInstructionStep[]
  const rating = userRating ? userRating : 0
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box className={styles.recipeImageContainer}>
        <Box className={styles.imageOverlay} >
          <Box 
            className={styles.cardHeader}>
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='body1'>{description}</Typography>
          </Box>
        </Box>
        <Box className={styles.recipeImage}>
        <img src={selectedImage} alt={name} />
        </Box>
        <Box className={styles.openTrayButton}>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          aria-label="show more"
          className={styles.openTrayButton}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </Box>
      
      
      <Collapse in={expanded} timeout='auto' unmountOnExit>
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
            <RatingsDisplay rating={rating} />
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
          <Typography variant="body1">Total Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {totalTime ? totalTime : 'None'}
          </Typography>
          <Typography variant="body1">Servings:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeYield ? recipeYield : 'None'}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="body1">Nutrition:</Typography>
          {nutrition && Object.keys(nutrition).map((item) => (
            <Box>
            <Typography variant="overline" color="text.secondary">{item}</Typography>
              <Typography variant="body2" color="text.secondary">{nutrition[item as keyof INutrition]}</Typography>
            </Box>
          ))}
        </Paper>

        <Paper>
          <Typography variant="body1">Ingredients:</Typography>
          {recipeIngredient && recipeIngredient.map((item) => (
            <Box>
              <Typography variant="body2" color="text.secondary">{item}</Typography>
            </Box>
          ))}
        </Paper>

        <Paper>
          <Typography variant="body1">Instructions:</Typography>
          {instructions && instructions.map((step) => (
            <Box>
              <Typography variant="body2" color="text.secondary">{step.text}</Typography>
            </Box>
          ))}
        </Paper>
                
        </CardContent>
        </Collapse>
    </Card>
  )
};