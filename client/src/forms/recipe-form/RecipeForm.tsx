import React from 'react';
import { FieldArray, useFormik } from 'formik';

import { ObjectId } from 'mongodb';
import { IRecipe, INutrition, CookingMethod, IInstructionStep } from '../../index.types';
import { jsonldConvertor } from '../../utils/utils'

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

  const typedNutrtion = formik.values.nutrition as INutrition
  const nutritionKeys = Object.keys(typedNutrtion)

  const typedInstructions = formik.values.recipeInstructions as IInstructionStep[]

  return (
    <div className={styles.recipeFormContainer}>
    <h2>{ recipe?.name }</h2>
      <form onSubmit={formik.handleSubmit}>

        <div className={styles.recipeFormSection}>
          <h3>Nutrition</h3>
          <>
            {
              nutritionKeys.map((key) => { 
                console.log('key: ', key)
                console.log('value: ', typedNutrtion[key as keyof INutrition])
                return (
                  <div key={key}>
                    <label htmlFor={typedNutrtion[key as keyof INutrition]} className={styles.inputLabel}>{key}</label>
                    <input id={typedNutrtion[key as keyof INutrition]} name={typedNutrtion[key as keyof INutrition]} type='text' onChange={formik.handleChange} value={typedNutrtion[key as keyof INutrition]} />
                  </div>
                )
              })  
            }
          </>
        </div>
        
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
          <h2>Organize</h2>
          <h3>Category</h3>
          <FieldArray
            name="recipeCategory"
            render={arrayHelpers => (
              <>
                {Array.isArray(formik.values.recipeCategory) && formik.values.recipeCategory?.map((category, idx) => (
                  <div key={idx}>
                    <label htmlFor={`category.$(idx)`} className={styles.inputLabel}>{idx + 1}</label>
                    <input id={`category.$(idx)`} name={`category.$(idx)`} type='text' onChange={formik.handleChange} value={category} />
                  </div>
                ))}
              </>
            )}
          />
          
          <h3>Cuisine</h3>
          <FieldArray
            name="recipeCuisine"
            render={arrayHelpers => (
              <>
                {Array.isArray(formik.values.recipeCuisine) && formik.values.recipeCuisine?.map((cuisine, idx) => (
                  <div key={idx}>
                    <label htmlFor={`cuisine.$(idx)`} className={styles.inputLabel}>{idx + 1}</label>
                    <input id={`cuisine.$(idx)`} name={`cuisine.$(idx)`} type='text' onChange={formik.handleChange} value={cuisine} />
                  </div>
                ))}
              </>
            )}
          />
        </div>

        <div className={styles.recipeFormSection}>
          <h2>Ingredients</h2>
          <FieldArray
            name="recipeIngredient"
            render={arrayHelpers => (
              <>
                {formik.values.recipeIngredient?.map((ingredient, idx) => (
                  <div key={idx}>
                    <label htmlFor={`ingredient.$(idx)`} className={styles.inputLabel}>{idx + 1}</label>
                    <input id={`ingredient.$(idx)`} name={`ingredient.$(idx)`} type='text' onChange={formik.handleChange} value={ingredient} />
                  </div>
                ))}
              </>
            )}
          />
        </div>

        <div className={styles.recipeFormSection}>
          <FieldArray
            name="recipeInstructions"
            render={arrayHelpers => (
              <>
                {typedInstructions.map((step, idx) => (
                  <div key={idx}>
                    <label htmlFor={step.text} className={styles.inputLabel}>{idx + 1}</label>
                    <input id={step.text} name={`ingredient.$(idx)`} type='text' onChange={formik.handleChange} value={step.text} />
                  </div>
                ))}
              </>
            )}
          />          
        </div>
      </form>
    </div>
  )
}