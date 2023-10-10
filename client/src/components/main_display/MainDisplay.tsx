import React from 'react';
import IRecipe from '../../index.types';

import styles from './MainDisplay.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const MainDisplay = (props: IProps): JSX.Element => {
  const recipe = props.recipe ? props.recipe : {}
  const { name, description, recipeIngredient, recipeInstructions, image, recipeYield, nutrition } = recipe as IRecipe;
  

  return (
    <div className={styles.mainDisplayContainer}>
      <h1>Main Display</h1>
      {props.recipe && 
        <div className='recipe-container'>
          <h2>Recipe</h2>
          <pre>{JSON.stringify(name)}</pre>
          <h2>Description</h2>
          <pre>{JSON.stringify(description)}</pre>
          <h2>Ingredients</h2>
          <pre>{recipeIngredient?.map((ingredient: any) =>  <div>{ingredient}</div>)}</pre>
          <h2>Instructions</h2>
          <pre>{recipeInstructions?.map((instruction: any) =>  <div>{JSON.stringify(instruction.text)}</div>)}</pre>
          <h2>Picture</h2>
          <img src={image && image[0]} alt='recipe'/>
          <pre>{JSON.stringify(image && image[0])}</pre>
          <h2>Serves</h2>
          <pre>{JSON.stringify(recipeYield)}</pre>
          <h2>Nutrition Facts</h2>
          <pre>{JSON.stringify(nutrition)}</pre>
        </div>
      }
    </div>
  )
}