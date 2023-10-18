import React, { useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormGroup,
  FormControlLabel,
	Grid,
	Paper,
  TextField
} from "@mui/material";
import * as Yup from "yup";

import {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
} from "./steps";

import FormStepper from "../../components/form-stepper/FormStepper";

import {
	TextBox,
	TextInput,
	RatingInput,
	FieldFromArray,
	FieldsFromInstructions,
	initVals,
	cookingmethods,
	IProps,
} from "./RecipeForm.conf";
import { IRecipe, CookingMethod } from "../../index.types";

import styles from "./RecipeForm.module.scss";

export const RecipeForm = (props: IProps) => {
	const { recipe } = props;
	const [newRecipe, setNewRecipe] = useState<IRecipe>({
		_id: "",
		userName: "",
		selectedImage: Array.isArray(recipe?.image)
			? recipe?.image[0]
			: recipe?.image,
		cookingMethod: [CookingMethod.none],
		userRating: 0,
		userComments: "",
		schemaType: "Recipe",
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
		recipeInstructions: recipe?.recipeInstructions,
	});
	const [currStep, setCurrStep] = useState(0);

	const paginationSteps = [
		"Your New Recipe",
		"Recipe Type",
		"Ingredients",
		"Instructions",
		"Nutrition",
	];

	const handleNextStep = () => {
		setCurrStep(currStep + 1)
	}

	const handleLastStep = () => {
		setCurrStep(currStep - 1)
	}

	return (
		<Paper className={styles.recipeFormContainer}>
			<Formik
				initialValues={recipe ? newRecipe : initVals}
				enableReinitialize={true}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{(Formik) => (
					<Form>
						{/* ================ Step 1 ================ */}
						{currStep === 0 && (
							<Step1
								Formik={Formik as FormikProps<IRecipe>}
								newRecipe={newRecipe}
								paginationSteps={paginationSteps}
								currStep={currStep}
								handleNextStep={handleNextStep}
								handleLastStep={handleLastStep}
							/>
						)}

						{/* ================ Step 2 ================ */}
						{currStep === 1 && (
							<Step2
								Formik={Formik as FormikProps<IRecipe>}
								newRecipe={newRecipe}
								paginationSteps={paginationSteps}
								currStep={currStep}
								handleNextStep={handleNextStep}
								handleLastStep={handleLastStep}
							/>						
						)}

						{/* ================ Step 3 ================ */}
						{currStep === 2 && (
							<Step3
								Formik={Formik as FormikProps<IRecipe>}
								newRecipe={newRecipe}
								paginationSteps={paginationSteps}
								currStep={currStep}
								handleNextStep={handleNextStep}
								handleLastStep={handleLastStep}
							/>
						)}

						{/* ================ Step 4 ================ */}
						{currStep === 3 && (
							<Step4
								Formik={Formik as FormikProps<IRecipe>}
								newRecipe={newRecipe}
								paginationSteps={paginationSteps}
								currStep={currStep}
								handleNextStep={handleNextStep}
								handleLastStep={handleLastStep}
							/>
						)}
						{/* ================ Step 5 ================ */}
						{currStep === 4 && (
							<Step5
								Formik={Formik as FormikProps<IRecipe>}
								newRecipe={newRecipe}
								paginationSteps={paginationSteps}
								currStep={currStep}
								handleNextStep={handleNextStep}
								handleLastStep={handleLastStep}
							/>
						)}
					</Form>
				)}
			</Formik>
		</Paper>
	);
};
