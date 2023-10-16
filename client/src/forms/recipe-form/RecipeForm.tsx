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

  return (
    <div className={styles.recipeFormContainer}>
      <h2>{recipe?.name}</h2>
      <img src={newRecipe?.selectedImage} alt={recipe?.name} />
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
          {/*  NUTRITION */}
          <div className={styles.recipeFormSection}>
              <h3>Nutrition</h3>              
              <>
                { newRecipe.nutrition &&
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
              </div>

          {/*  COOKING METHOD */}
          <div className={styles.recipeFormSection}>
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
          </div>

          {/* RATING */}
          <div className={styles.recipeFormSection}>             
              <RatingInput                
              currValue={Formik.values.userRating ? Formik.values.userRating : 0}
              name='userRating'
            />
          </div>

          {/* USER COMMENTS */}          
          <div className={styles.recipeFormSection}>             
            <TextBox
              label='userComments'
              name='userComments'
              type='text'
              placeholder='Comments'
            />
          </div>

          {/* DESCRIPTION */}       
          <div className={styles.recipeFormSection}>             
            <TextBox
              label='description'
              name='description'
              type='text'
            />
          </div>
          

          {/* PREP TIME */}       
          <div className={styles.recipeFormSection}>             
            <TextInput
              label='prepTime'
              name='prepTime'
              type='text'
            />
          </div>
          
            
          {/* COOK TIME */}   
          <div className={styles.recipeFormSection}>             
            <TextInput
              label='cookTime'
              name='cookTime'
              type='text'
            />
          </div>
        
          {/* YIELD */}   
          <div className={styles.recipeFormSection}>             
            <TextInput
              label='recipeYield'
              name='recipeYield'
              type='text'
            />
          </div>
        
          {/* CATEGORY */}
          <h3>Category</h3>
          <div className={styles.recipeFormSection}>             
            <FieldFromArray
              name="recipeCategory"
            />
          </div>
          
          {/* CUISINE */}
          <h3>Cuisine</h3>
          <div className={styles.recipeFormSection}>             
            <FieldFromArray
              name="recipeCuisine"
            />
          </div>
            
          {/* INGREDIENTS */}
          <h3>Ingredients</h3>
          <div className={styles.recipeFormSection}>               
            <FieldFromArray
              name="recipeIngredient"
            />
          </div>
            
          {/* INSTRUCTIONS */}
          <h3>Instructions</h3>
          <div className={styles.recipeFormSection}>               
            <FieldsFromInstructions
              name='recipeInstructions'
            />
          </div>


          {/*  SUBMIT  */}
          <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
   )
 }