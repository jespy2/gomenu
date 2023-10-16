import React from 'react';
import { FieldArray, useFormik, Field, FormikErrors, FormikProvider } from 'formik';

// import { Ratings } from '../../components/ratings/Ratings';
import { IRecipe, INutrition, CookingMethod, IInstructionStep } from '../../index.types';
import { jsonldConvertor } from '../../utils/utils'

import styles from './RecipeForm.module.scss';
import { Dish } from '../../components/ratings/Dish';

type IProps = {
  recipe: IRecipe | undefined
}

interface IFieldProps {
  field: {
    name: string;
    value: any;
  };
  form: {
    setFieldValue: (field: string, value: any) => Promise<void | FormikErrors<IProps>>
  };
} 

export const RecipeForm = (props: IProps) => {
  const { recipe } = props;
  const newRecipe = {
    _id: '',
    userName: '',
    selectedImage: Array.isArray(recipe?.image) ? recipe?.image[0] : recipe?.image,
    cookingMethod: CookingMethod.none,
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
  }
    
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
    initialValues: recipe ? newRecipe : initVals,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const imageOptions = (recipe?.image && typeof recipe.image !== 'string') 
    ? recipe.image
    : undefined;

  const typedNutrtion = formik.values.nutrition as INutrition
  const nutritionKeys = Object.keys(typedNutrtion)

  const cookingmethods = Object.keys(CookingMethod)

  const typedInstructions = formik.values.recipeInstructions as IInstructionStep[]

  const ratingsInput = (currValue:number) => {
    let component = [];
    for (let i = 1; i <= 5; i++){
      component.push(
        <label>
          <input className={styles.ratingsForm} type='radio' name='userRating' value={i} />
          <Dish idx={i} currValue={currValue} />
        </label>
      )
    }
    return component
  }

  return (
    <div className={styles.recipeFormContainer}>
    <h2>{ recipe?.name }</h2>
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>

        <div className={styles.recipeFormSection}>
          <h3>Nutrition</h3>
          <>
            {
              nutritionKeys.map((key) => { 
                console.log('key: ', key)
                console.log('value: ', typedNutrtion[key as keyof INutrition])
                return key !== '@type' && (
                  <div key={key}>
                    <label htmlFor={typedNutrtion[key as keyof INutrition]} className={styles.inputLabel}>{key}</label>
                    <Field id={key} name={key} type='text' onChange={formik.handleChange} value={typedNutrtion[key as keyof INutrition]} />
                  </div>
              )
              })  
            }
          </>
        </div>
        
        <div className={styles.recipeFormSection}>
          <label htmlFor='id' className={styles.inputLabel}>ID</label>
          <Field id='id' name='id' type='text' onChange={formik.handleChange} value={formik.values._id as string} />

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

        {/* COOKING METHOD */}
        <div className={styles.recipeFormSection}>
          <div id='cookingMethod-checkboxGroup' className={styles.inputLabel}>Cooking Method</div>
            <div className={styles.checkboxGroup} role='group' aria-labelledby='cookingMethod-checkboxGroup'>
              <>
                {cookingmethods.map((method) => (
                  <label>
                    <input type='checkbox' name='cookingMethod' value={method} />
                    {method}
                  </label>
                ))}
              </>
          </div>
        </div>
        
        {/* RATING */}
        <div className={styles.recipeFormSection}>
          <div id='userRating' className={styles.inputLabel}>Rating</div>
            <div className={styles.radioGroup} role='group' aria-labelledby='userRating'>
              {({ field, form}: IFieldProps) => ({ratingsInput(field.value)})}
            </div>
        </div>

        {/* USER COMMENTS */}
        <div className={styles.recipeFormSection}>
          <label htmlFor='userComments' className={styles.inputLabel}>Comments</label>
          <input id='userComments' name='userComments' type='text' onChange={formik.handleChange} value={formik.values.userComments} className={styles.largeTextbox} />
        </div>

        {/* DESCRIPTION */}
        <div className={styles.recipeFormSection}>
          <label htmlFor='description' className={styles.inputLabel}>Description</label>
          <input id='description' name='description' type='text' onChange={formik.handleChange} value={formik.values.description} className={styles.largeTextbox} />
        </div>

        
        <div className={styles.recipeFormSection}>
          {/* PREP TIME */}
          <label htmlFor='prepTime' className={styles.inputLabel}>Prep Time</label>
          <input id='prepTime' name='prepTime' type='text' onChange={formik.handleChange} value={formik.values.prepTime} />
       
          {/* COOK TIME */}
          <label htmlFor='cookTime' className={styles.inputLabel}>Cook Time</label>
          <input id='cookTime' name='cookTime' type='text' onChange={formik.handleChange} value={formik.values.cookTime} />
          <label htmlFor='totalTime' className={styles.inputLabel}>Total Time</label>
          <input id='totalTime' name='totalTime' type='text' onChange={formik.handleChange} value={formik.values.totalTime} />
        </div>
        
        {/* YIELD */}
        <div className={styles.recipeFormSection}>
          <label htmlFor='recipeYield' className={styles.inputLabel}>Recipe Yield</label>
          <input id='recipeYield' name='recipeYield' type='text' onChange={formik.handleChange} value={formik.values.recipeYield} />
        </div>
        
        {/* CATEGORY */}
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
            
          {/* CUISINE */}
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
          <h2>Instructions</h2>
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
        </FormikProvider>
    </div>
  )
}