import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { RecipeForm } from '../../forms/recipe-form/RecipeForm';
import { IRecipe } from '../../index.types';

import styles from './MainDisplay.module.scss';

type IProps = {
  recipe: IRecipe | undefined;
  handleFormSubmit: (values: IRecipe) => Promise<void>;
}

export const MainDisplay = (props: PropsWithChildren): JSX.Element => {
  const theme = useTheme();
  return (
    <Box className={styles.mainDisplayContainer}  sx={{ bgcolor: theme.palette.primary.main}}>      
      {props.children}
    </Box>
  )
}