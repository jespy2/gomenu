import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { RecipeForm } from '../../forms/recipe-form/RecipeForm';
import { IRecipe } from '../../index.types';

import styles from './MainDisplay.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const MainDisplay = (props: IProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Box className={styles.mainDisplayContainer}  sx={{ bgcolor: theme.palette.primary.main}}>
      <Box>
        <h1>Username's Cookbook</h1>
      </Box>
      
      {props.recipe &&
        <RecipeForm recipe={props.recipe} />
      }
    </Box>
  )
}