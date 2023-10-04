import React, { useState, useEffect } from "react";


import { URLSearch } from '../forms/URLSearch';

import apis from "../api";

export const Home = () => {
  const [recipe, setRecipe] = useState<any>()
  const [userURL, setUserURL] = useState<string>();

  const testURL = 'https://www.staysnatched.com/instant-pot-low-carb-creamy-garlic-tuscan-chicken-thighs/'

  // useEffect(() => {
  //   (async () => {
  //     await apis.getRecipe(testURL)
  //       .then(data => {
  //         const _recipe = {...data.data}['@graph'].find((recipe: any) => recipe['@type'] === 'Recipe');
  //         setRecipe(_recipe)
  //         console.log(_recipe)
  //       })
  //   })()
  // }, [])

  useEffect(() => {
    userURL && (async () => {
      await apis.getRecipe(userURL)
      .then(data => {
        const _recipe = {...data.data}['@graph'].find((recipe: any) => recipe['@type'] === 'Recipe');
        setRecipe(_recipe)
        console.log(data)
        console.log(_recipe)
      })
    })()
  }, [userURL])
  
  
  return (
    <>
      <h1>Home test</h1>
      <URLSearch setUserURL={setUserURL} />
      {recipe &&
        <>
          <h2>Recipe</h2>
          <pre>{JSON.stringify(recipe.name)}</pre>
          <h2>Ingredients</h2>
          <pre>{recipe.recipeIngredient.map((ingredient: any) =>  <div>{ingredient}</div>)}</pre>
          <h2>Instructions</h2>
          <pre>{recipe.recipeInstructions.map((instruction: any) =>  <div>{JSON.stringify(instruction.text)}</div>)}</pre>
        <h2>Picture</h2>
        <img src={recipe?.image[0]} alt='recipe'/>
          <pre>{JSON.stringify(recipe.image[0])}</pre>
          <h2>Serves</h2>
          <pre>{JSON.stringify(recipe.recipeYield)}</pre>
          <h2>Nutrition Facts</h2>
          <pre>{JSON.stringify(recipe.nutrition)}</pre>
        </>
      }
    </>
  )
}