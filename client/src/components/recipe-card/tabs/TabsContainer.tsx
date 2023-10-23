import React from 'react';
import { IRecipe } from '../../../index.types';

import { Tab0 } from './Tab0';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';

import { IInstructionStep } from '../../../index.types';

interface ITabsProps {
  recipe: IRecipe | undefined;
  _tab: number;
}

export const TabsContainer = (props: ITabsProps) => {
  const { recipe, _tab } = props;

  const instructions = recipe?.recipeInstructions as IInstructionStep[]
  return (
    <>
      <Tab0 recipeIngredient={recipe?.recipeIngredient} _tab={_tab} />
      <Tab1 instructions={instructions} _tab={_tab} />
      <Tab2 recipe={props.recipe} _tab={_tab} />
      <Tab3 nutrition={recipe?.nutrition} _tab={_tab} />
    </>
  )
}