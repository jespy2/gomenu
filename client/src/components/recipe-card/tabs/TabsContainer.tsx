import React from 'react';
import { Box } from '@mui/material';

import { Tab0 } from './Tab0';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';

import { CardActionsMenu } from '../RecipeCard.config';
import { IInstructionStep } from '../../../index.types';
import { IRecipe } from '../../../index.types';

import styles from '../RecipeCard.module.scss';

interface ITabsProps {
  recipe: IRecipe | undefined;
  _tab: number;
}

export const TabsContainer = (props: ITabsProps) => {
  const { recipe, _tab } = props;

  const id = recipe?._id ? recipe?._id as string : '' as string  
  const instructions = recipe?.recipeInstructions as IInstructionStep[]

  return (
    <Box  className={styles.collapsiblePanel}>
      <Tab0 key='ingredient_tab' recipeIngredient={recipe?.recipeIngredient} _tab={_tab} >
        <CardActionsMenu id={id} />
      </Tab0>
      <Tab1 key='instructions_tab' instructions={instructions} _tab={_tab}>
        <CardActionsMenu id={id} />
      </Tab1>
      <Tab2 key='details_tab' recipe={props.recipe} _tab={_tab}>
        <CardActionsMenu id={id} />
      </Tab2>
      <Tab3 key='nutrition_tab' nutrition={recipe?.nutrition} _tab={_tab}>
        <CardActionsMenu id={id} />
      </Tab3>
    </Box>
  )
}