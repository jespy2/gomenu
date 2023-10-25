import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';
import { IRecipe } from '../../../index.types';

interface IProps { 
  recipe: IRecipe | undefined;
  _tab: number;
  children: JSX.Element;
}

export const Tab2 = (props: IProps) => { 
  const {
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeCategory,
    recipeCuisine,
    cookingMethod,
    userComments
  } = props.recipe as IRecipe;

  return (    
    <TabPanel value={props._tab} index={2}>
      {props.children}
      <Box>
        <Typography component={'span'} variant="body1">Cooking Method:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {cookingMethod}
        </Typography>
        <Typography component={'span'} variant="body1">Category:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {recipeCategory ? recipeCategory : 'None'}
        </Typography>
        <Typography component={'span'} variant="body1">Cuisine Type:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {recipeCuisine ? recipeCuisine : 'None'}
        </Typography>
      </Box>

      <Box>
        <Typography component={'span'} variant="body1">Comments:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {userComments ? userComments : 'None'}
        </Typography>
      </Box>


      <Box>
        <Typography component={'span'} variant="body1">Prep Time:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {prepTime ? prepTime : 'None'}
        </Typography>
        <Typography component={'span'} variant="body1">Cook Time:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {cookTime ? cookTime : 'None'}
        </Typography>
        <Typography component={'span'} variant="body1">Total Time:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {totalTime ? totalTime : 'None'}
        </Typography>
        <Typography component={'span'} variant="body1">Servings:</Typography>
        <Typography component={'span'} variant="body2" color="text.secondary">
          {recipeYield ? recipeYield : 'None'}
        </Typography>
      </Box>
    </TabPanel>
  )
};