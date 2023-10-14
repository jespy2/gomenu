import React from 'react';

import { RecipeThumbnail } from '../recipe-thumbnail/RecipeThumbnail';
import { RecipeForm } from '../../forms/recipe-form/RecipeForm';
import { IRecipe } from '../../index.types';

import styles from './MainDisplay.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const MainDisplay = (props: IProps): JSX.Element => {
  return (
    <div className={styles.mainDisplayContainer}>
      <h1>Username's Cookbook</h1>
      <div className={styles.mainDisplay}>
        {props.recipe &&
          <RecipeForm recipe={props.recipe} />
        }
        {props.recipe &&         
        <RecipeThumbnail recipe={props.recipe} />
        }
      </div>
    </div>
  )
}