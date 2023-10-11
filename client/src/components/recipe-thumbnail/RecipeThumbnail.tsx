import React from 'react';

import { IRecipe } from '../../index.types';

import styles from './RecipeThumbnail.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const RecipeThumbnail = (props: IProps) => { 
  const recipe = props.recipe ? props.recipe : {}
  const { name, description, image } = recipe as IRecipe;
  
  return (
    <div className={styles.recipeThumbnail}>
    <h2>{name}</h2>       
          {/* <p>{description}</p> */}
          <img className={styles.recipeImage} src={image && image[0]} alt='recipe'/>
    </div>
  )
};