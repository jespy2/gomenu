import React from 'react';

import { IRecipe } from '../../index.types';

import styles from './RecipeCard.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const RecipeCard = (props: IProps) => { 
  const recipe = props.recipe ? props.recipe : {}
  const { name, description, recipeIngredient, recipeInstructions, image, recipeYield, nutrition } = recipe as IRecipe;
  
  return (
    <div className={styles.recipeCard}>
      <h1>Recipe Card</h1>
      <div className='styles.recipeContainer'>
          <h2>Recipe</h2>
          {JSON.stringify(name)}
          <h2>Description</h2>
          {JSON.stringify(description)}
          <h2>Ingredients</h2>
          {recipeIngredient?.map((ingredient: any) =>  <div>{ingredient}</div>)}
          <h2>Instructions</h2>
          {recipeInstructions?.map((instruction: any) =>  <div>{JSON.stringify(instruction.text)}</div>)}
          <h2>Picture</h2>
          <img className={styles.recipeImage} src={image && image[0]} alt='recipe'/>
          {JSON.stringify(image && image[0])}
          <h2>Serves</h2>
          {JSON.stringify(recipeYield)}
          <h2>Nutrition Facts</h2>
          {JSON.stringify(nutrition)}
      </div>
      <button>this will be a link to the original recipe site</button>
    </div>
  )
};