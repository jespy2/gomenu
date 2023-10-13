import { IRecipe } from "../index.types";

export const jsonldConvertor = (obj: IRecipe, jsonldKey: keyof IRecipe) => {
  let resultsArr: string[] = []
  // Nutrition
  if (jsonldKey === 'nutrition') {
    const nutritionData = obj[jsonldKey];
    resultsArr = nutritionData
      ? Object.keys(nutritionData).filter((el) => el !== "@type")
      : [];
    return resultsArr
  }
  // Instructions
  if (jsonldKey === 'recipeInstructions'){
    const nutritionData = obj[jsonldKey];
    resultsArr = nutritionData
      ? Object.keys(nutritionData).filter((el) => el !== "@type")
      : [];
    return resultsArr
  }
  // const jsonKeys = Object.keys(obj?.recipeIngredient) as (keyof IRecipe)[];
  // // console.log('jsonKeys: ', jsonKeys)

  // Array of string fields
  resultsArr = obj[jsonldKey] as string[];
  return resultsArr
}