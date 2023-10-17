import React from 'react';
import { Field, useField, FieldHookConfig, FieldArray } from 'formik';

import { Dish } from '../../components/ratings/Dish';
import { IRecipe, CookingMethod } from '../../index.types';
import styles from './RecipeForm.module.scss';

interface IOtherProps {
  label: string;
}


export const TextInput = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <Field className={styles.textInput} {...field} {...props} />
      {
      meta.touched && meta.error
        ? (<div className={styles.formError}>{meta.error}</div>)
        : null
      }
    </>
  )
}

export const TextBox = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <Field className={styles.textBox} {...field} {...props} as='textarea' />
      {
      meta.touched && meta.error
        ? (<div className={styles.formError}>{meta.error}</div>)
        : null
      }
    </>
  )
}

export const FieldFromArray = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <FieldArray
      name={field.name}
      render={arrayHelpers => (
        <>
          {Array.isArray(field.value) && field.value.map((inputItem, idx) => (
            <div key={idx} >
              <label htmlFor={`inputItem.$(idx)`} className={styles.inputLabel}>{idx + 1}</label>
              <input id={`inputItem.$(idx)`} name={`inputItem.$(idx)`} type='text' onChange={field.onChange} value={inputItem} />
            </div>
          ))}
        </>
      )}
    />
  )
}

export const FieldsFromInstructions = (props: FieldHookConfig<string>) => {
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

interface ICurrValue {
  currValue: number;
}
  
export const RatingInput = ({ currValue, ...props }: ICurrValue & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  let component = [];
  for (let i = 1; i <= 5; i++){
      const _id = i.toString();
      component.push(
        <label key={_id}>
          <Field className={styles.ratingsForm} type='radio'  {...props} value={i} />
          <Dish idx={i} isFull={i <= currValue} />
        </label>
      )
    }
  return (         
    <div className={styles.ratingContainer} role='group' aria-labelledby='userRating'>
      {component}
    </div>  
  )
}

export const initVals = {
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

export const cookingmethods = Object.keys(CookingMethod)


export type IProps = {
  recipe: IRecipe | undefined
}