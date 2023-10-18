import React from 'react';
import { Field, useField, FieldHookConfig, FieldArray } from 'formik';
import { TextField } from '@mui/material';

import { Dish } from '../../components/ratings/Dish';
import { IRecipe, CookingMethod } from '../../index.types';
import styles from './RecipeForm.module.scss';

interface IOtherProps {
  label: string;
}


export const TextInput = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
      <TextField
        fullWidth
        id={props.id || props.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        label={label}
        variant='standard'
        className={styles.textInput}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
  )
}

export const TextBox = ({ label, ...props }: IOtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <TextField
        id={props.id || props.name}
        name={field.name}
        fullWidth
        multiline
        maxRows={4}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        label={label}
        variant='standard'
        className={styles.textInput}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
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
              <TextField
                fullWidth
                id={`inputItem.$(idx)`}
                key={idx}
                multiline
                maxRows={4}
                name={`inputItem.$(idx)`}
                value={inputItem}
                onChange={field.onChange}
                onBlur={field.onBlur}
                variant='standard'
                className={styles.textInput}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
              />
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
              <TextField
                fullWidth
                id={`step.$(idx)`}
                key={idx}
                name={`step.$(idx)`}
                multiline
                maxRows={6}
                value={step.text}
                onChange={field.onChange}
                onBlur={field.onBlur}
                variant='standard'
                className={styles.textInput}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
              />
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