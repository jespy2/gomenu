import React,  { useState } from 'react';
import { Formik, Form, Field, useField, FieldHookConfig, FieldArray } from 'formik';
import * as Yup from 'yup';

import { Dish } from '../../components/ratings/Dish';
import styles from './RecipeForm.module.scss';
import { IRecipe, CookingMethod, INutrition, IInstructionStep } from '../../index.types';

interface IOtherProps {
  label: string;
}


const TextInput = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field className={styles.textInput} {...field} {...props} />
      {
      meta.touched && meta.error
        ? (<div className={styles.formError}>{meta.error}</div>)
        : null
      }
    </>
  )
}

const TextBox = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field className={styles.textBox} {...field} {...props} />
      {
      meta.touched && meta.error
        ? (<div className={styles.formError}>{meta.error}</div>)
        : null
      }
    </>
  )
}

const FieldFromArray = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <FieldArray
      name={field.name}
      render={arrayHelpers => (
        <>
          {Array.isArray(field.value) && field.value.map((inputItem, idx) => (
            <div key={idx}>
              <label htmlFor={`inputItem.$(idx)`} className={styles.inputLabel}>{idx + 1}</label>
              <input id={`inputItem.$(idx)`} name={`inputItem.$(idx)`} type='text' onChange={field.onChange} value={inputItem} />
            </div>
          ))}
        </>
      )}
    />
  )
}

const FieldsFromInstructions = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <FieldArray
      name={field.name}
      render={arrayHelpers => (
        <>
          {Array.isArray(field.value) && field.value.map((step, idx) => (
            <div key={idx}>
              <label htmlFor={step.txt} className={styles.inputLabel}>{idx + 1}</label>
              <input id={`step.text`} name={`step.$(idx)`} type='text' onChange={field.onChange} value={step.text} />
            </div>
          ))}
        </>
      )}
    />
  )
}
  
const RatingInput = ( (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  let component = [];
  const currValue = parseInt(field.value)
  for (let i = 1; i <= 5; i++){
      const _id = i.toString();
      component.push(
        <label id={_id}>
          <Field className={styles.ratingsForm} type='radio'  {...props} value={i} />
          <Dish idx={i} currValue={currValue} />
        </label>
      )
    }
  return (    
    <>
      <div id='userRating' className={styles.inputLabel}>Rating</div> 
      <div className={styles.radioGroup} role='group' aria-labelledby='userRating'>
        {component}
      </div>  
    </>
  )
})

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

const cookingmethods = Object.keys(CookingMethod)


type IProps = {
  recipe: IRecipe | undefined
}


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
      <h2>{ recipe?.name }</h2>
      <Formik
        initialValues={recipe ? newRecipe : initVals}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400)
        }}
      >
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
                      value={newRecipe.nutrition && newRecipe.nutrition[key as keyof INutrition]}
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
            <RatingInput name='userRating'/>
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
      </Formik>
    </div>
   )
 }