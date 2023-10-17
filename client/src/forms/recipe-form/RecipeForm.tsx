import React,  { useState } from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import {
  TextBox,
  TextInput,
  RatingInput,
  FieldFromArray,
  FieldsFromInstructions,
  initVals,
  cookingmethods,
  IProps
} from './RecipeForm.conf';
import { IRecipe, CookingMethod } from '../../index.types';

import styles from './RecipeForm.module.scss';




export const RecipeForm = (props: IProps) => {
  const { recipe } = props;
  const [newRecipe, setNewRecipe] = useState<IRecipe>({
    _id: '',
    userName: '',
    selectedImage: Array.isArray(recipe?.image) ? recipe?.image[0] : recipe?.image,
    cookingMethod: [CookingMethod.none],
    userRating: 0,
    userComments: '',
    schemaType: 'Recipe',
    recipeID: recipe?.recipeID,
    image: recipe?.image,
    name: recipe?.name,
    description: recipe?.description,
    nutrition: recipe?.nutrition,
    prepTime: recipe?.prepTime,
    cookTime: recipe?.cookTime,
    totalTime: recipe?.totalTime,
    recipeYield: recipe?.recipeYield,
    recipeCategory: recipe?.recipeCategory,
    recipeCuisine: recipe?.recipeCuisine,
    recipeIngredient: recipe?.recipeIngredient,
    recipeInstructions: recipe?.recipeInstructions
  })
  const [currStep, setCurrStep] = useState(0);

  const paginationSteps = ['Your New Recipe', 'Recipe Type', 'Ingredients', 'Instructions', 'Nutrition']

  return (
    <div className={styles.recipeFormContainer}>
      <Formik
        initialValues={recipe ? newRecipe : initVals}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400)
        }}
      >
        {(Formik) => (
          <Form>
            {/* ================ Step 1 ================ */}
            {currStep === 0 &&
              <div className={styles.step}>
                <h2>{paginationSteps[currStep]}</h2>
                <p>We've grabbed your recipe.  Please confirm the info below and click continue.</p>
                <div className={styles.stepContainer} >
                  <div className={styles.stepSubContainer}>
                    <h3>{recipe?.name}</h3>
                    <div>
                      <img className={styles.recipeFormImage} src={newRecipe?.selectedImage} alt={recipe?.name} />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                
                  <div className={styles.stepSubContainer}>
                    <h3>Description</h3>
                    <TextBox
                      label='description'
                      name='description'
                      type='text'
                    />
                    {/* RATING */}                        
                    <h3>Rating</h3>
                    <RatingInput                
                      currValue={Formik.values.userRating ? Formik.values.userRating : 0}
                      name='userRating'
                    />

                    {/* USER COMMENTS */} 
                    <h3>Your comments</h3>               
                    <TextBox
                      label='userComments'
                      name='userComments'
                      type='text'
                      placeholder='Comments'
                    />
                    <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep + 1)}>Continue</button>
                  </div>
                </div>
              </div>
            }
           
            {/* ================ Step 2 ================ */}
            {currStep === 1 &&
              <div className={styles.recipeFormSection}>
                <h2>{paginationSteps[currStep]}</h2>
                {/*  COOKING METHOD */}
                <h3>Cooking Method</h3>
                <>
                  {cookingmethods.map((method) => (
                    <label>
                      <Field type='checkbox' name='cookingMethod' value={method} />
                      {method}
                    </label>
                  ))
                  }
                </>
                {/* CATEGORY */}
                <h3>Category</h3>
                <FieldFromArray
                  name="recipeCategory"
                />
                
                {/* CUISINE */}
                <h3>Cuisine</h3>
                <FieldFromArray
                  name="recipeCuisine"
                />

                {/* PREP TIME */}  
                <h3>Prep Time</h3>           
                <TextInput
                  label='prepTime'
                  name='prepTime'
                  type='text'
                />
              
                
                {/* COOK TIME */} 
                <h3>Total Cook Time</h3>            
                <TextInput
                  label='cookTime'
                  name='cookTime'
                  type='text'
                  />
            
                {/* YIELD */}  
                <h3>Servings</h3>             
                <TextInput
                  label='recipeYield'
                  name='recipeYield'
                  type='text'
                />

                <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep - 1)}>Go Back</button>
                <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep + 1)}>Continue</button>
              </div>                
            }

            
    {/* ================ Step 3 ================ */}
    {currStep === 2 &&
      <div className={styles.recipeFormSection}>
        {/* INGREDIENTS */}    
        <h3>Ingredients</h3>            
        <FieldFromArray
          name="recipeIngredient"
          />
                
        <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep - 1)}>Go Back</button>
      <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep + 1)}>Continue</button>
      </div>
    }
          
    {/* ================ Step 4 ================ */}
    {currStep === 3 &&
      <div className={styles.recipeFormSection}> 
      {/* INSTRUCTIONS */}
      <h3>Instructions</h3>              
        <FieldsFromInstructions
          name='recipeInstructions'
        />
                
        <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep - 1)}>Go Back</button>
      <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep + 1)}>Continue</button>
      </div>
    }
        {/* ================ Step 5 ================ */}
        {currStep === 4 &&
              < div className={styles.recipeFormSection}>
              <h2>{paginationSteps[currStep]}</h2>
              {/*  NUTRITION */ }
              <h3>Nutrition</h3>
              <>
                {newRecipe.nutrition &&
                  Object.keys(newRecipe.nutrition).map((key) => {
                    return key !== '@type' &&
                      <>
                        <TextInput
                          label={key}
                          name={key}
                          type='text'
                        // value={newRecipe.nutrition && newRecipe.nutrition[key as keyof INutrition]}
                        />
                      </>
                  })
                }
              </>
              <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep - 1)}>Go Back</button>
              <button className={styles.paginationNavButton} onClick={() => setCurrStep(currStep + 1)}>Continue</button>
          </div>
    }
  
          

          
        
          
            
          
            
          


          {/*  SUBMIT  */}
          <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
   )
 }