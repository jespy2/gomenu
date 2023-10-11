import React from 'react';
import { useFormik } from 'formik';

import { ObjectId } from 'mongodb';
import { IRecipe, INutrition,  CookingMethod } from '../../index.types';

import styles from './RecipeForm.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

export const RecipeForm = (props: IProps) => {
  const { recipe } = props;
  const initVals = {
      _id: '',
      userName: '',
      selectedImage: '',
      cookingMethod: CookingMethod.none,
      userRating: 0,
      userComments: '',
      schemaType: 'Recipe',
      recipeID: '',
      image: '',
      name: '',
      description: '',
      nutrition: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      recipeYield: '',
      recipeCategory: '',
      recipeCuisine: '',
      recipeIngredient: [''],
        recipeInstructions: ''
    };
  
  const formik = useFormik({
    initialValues: recipe ? recipe : initVals,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const imageOptions = (recipe?.image && typeof recipe.image !== 'string') 
    ? recipe.image
    : undefined;

  return (
    <div className={styles.recipeFormContainer}>
    <h2>{ recipe?.name }</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.recipeFormSection}>
          <label htmlFor='id' className={styles.inputLabel}>ID</label>
          <input id='id' name='id' type='text' onChange={formik.handleChange} value={formik.values._id as string} />

          <label htmlFor='userName' className={styles.inputLabel}>User Name</label>
          <input id='userName' name='userName' type='text' onChange={formik.handleChange} value={formik.values.userName} />
        </div>

        {imageOptions
          ?
          <div className={styles.recipeFormSection}>
            <div id='selectedImage-radioGroup' className={styles.inputLabel}>Choose a picture</div>
            <div className={styles.radioGroup} role='group' aria-labelledby='selectedImage-radioGroup'>
            {imageOptions.map((image) => 
                <label>
                  <input type='radio' name='image' value={image} />
                  <img src={image} alt='recipe' />
                </label>
              )}
            </div>
          </div>
          :
          <div className={styles.recipeFormSection}>
            <label htmlFor='selectedImage' className={styles.inputLabel}>Selected Image</label>
            <input id='selectedImage' name='selectedImage' type='text' onChange={formik.handleChange} value={formik.values.selectedImage} />
          </div>
        }

        <div className={styles.recipeFormSection}>
          <div id='cookingMethod-checkboxGroup' className={styles.inputLabel}>Cooking Method</div>
          <div className={styles.checkboxGroup} role='group' aria-labelledby='cookingMethod-checkboxGroup'>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.instantpot} />
              Instant Pot
            </label>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.stove} />
              Stove
            </label>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.oven} />
              Oven
            </label>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.airfryer} />
              Air Fryer
            </label>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.microwave} />
              Microwave
            </label>
            <label>
              <input type='checkbox' name='cookingMethod' value={CookingMethod.none} />
              None
            </label>
          </div>
        </div>
        
        <div className={styles.recipeFormSection}>
          <div id='userRating-radioGroup' className={styles.inputLabel}>Rating</div>
          <div className={styles.radioGroup} role='group' aria-labelledby='userRating-radioGroup'>
            <label>
              <input type='radio' name='userRating' value={1} />
              1
            </label>
            <label>
              <input type='radio' name='userRating' value={2} />
              2
            </label>
            <label>
              <input type='radio' name='userRating' value={3} />
              3
            </label>
            <label>
              <input type='radio' name='userRating' value={4} />
              4
            </label>
            <label>
              <input type='radio' name='userRating' value={5} />
              5
            </label>
          </div>
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='userComments' className={styles.inputLabel}>Comments</label>
          <input id='userComments' name='userComments' type='text' onChange={formik.handleChange} value={formik.values.userComments} className={styles.largeTextbox} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='description' className={styles.inputLabel}>Description</label>
          <input id='description' name='description' type='text' onChange={formik.handleChange} value={formik.values.description} className={styles.largeTextbox} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='nutrition' className={styles.inputLabel}>Nutrition</label>
          <input id='nutrition' name='nutrition' type='text' onChange={formik.handleChange} value={formik.values.nutrition as string} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='prepTime' className={styles.inputLabel}>Prep Time</label>
          <input id='prepTime' name='prepTime' type='text' onChange={formik.handleChange} value={formik.values.prepTime} />
          
          <label htmlFor='cookTime' className={styles.inputLabel}>Cook Time</label>
          <input id='cookTime' name='cookTime' type='text' onChange={formik.handleChange} value={formik.values.cookTime} />
          <label htmlFor='totalTime' className={styles.inputLabel}>Total Time</label>
          <input id='totalTime' name='totalTime' type='text' onChange={formik.handleChange} value={formik.values.totalTime} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeYield' className={styles.inputLabel}>Recipe Yield</label>
          <input id='recipeYield' name='recipeYield' type='text' onChange={formik.handleChange} value={formik.values.recipeYield} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeCategory' className={styles.inputLabel}>Recipe Category</label>
          <input id='recipeCategory' name='recipeCategory' type='text' onChange={formik.handleChange} value={formik.values.recipeCategory} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeCuisine' className={styles.inputLabel}>Recipe Cuisine</label>
          <input id='recipeCuisine' name='recipeCuisine' type='text' onChange={formik.handleChange} value={formik.values.recipeCuisine} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeIngredient' className={styles.inputLabel}>Recipe Ingredient</label>
          <input id='recipeIngredient' name='recipeIngredient' type='text' onChange={formik.handleChange} value={formik.values.recipeIngredient} />
        </div>

        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeInstructions' className={styles.inputLabel}>Recipe Instructions</label>
          <input id='recipeInstructions' name='recipeInstructions' type='text' onChange={formik.handleChange} value={formik.values.recipeInstructions as string} />
        </div>
      </form>
    </div>
  )
}