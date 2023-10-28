import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikProps } from "formik";
import { Paper } from "@mui/material";
import * as Yup from "yup";

import { Step1, Step2, Step3, Step4, Step5, Step6 } from "./steps";

import apis from "../../api";
import { initVals, imageFinder } from "./RecipeForm.config";
import { IRecipe, CookingMethod } from "../../index.types";

import styles from "./RecipeForm.module.scss";

interface IProps {
  recipe: IRecipe | undefined;
  setRecipe: React.Dispatch<React.SetStateAction<IRecipe | undefined>>;
}

export const RecipeForm = (props: IProps) => {
	const { recipe, setRecipe } = props;

	
	imageFinder(recipe?.image)
	const [newRecipe, setNewRecipe] = useState<IRecipe>({
		_id: undefined,
		userName: recipe?.userName || "",
		selectedImage: imageFinder(recipe?.image),
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

	const navigate = useNavigate()

	const paginationSteps = [
		"Your New Recipe",
		"Recipe Type",
		"Ingredients",
		"Instructions",
		"Nutrition",
		"Review"
	];

	const handleFormSubmit = async (values: IRecipe) => {
		await apis.insertRecipe(values)
			.then((res) => {
				console.log(res)
			})
			.then(() => setRecipe({...values}))
			.then(() => setNewRecipe({...values}))
			.then(() => navigate('/showrecipe'))
	}

	const handleNextStep = () => {
		setCurrStep(currStep + 1);
	};

	const handleLastStep = () => {
		setCurrStep(currStep - 1);
	};

	return (
		<Paper className={styles.recipeFormContainer}>
			<Formik
				initialValues={recipe ? newRecipe : initVals}
				enableReinitialize={true}
				onSubmit={(values, { setSubmitting }) => {
					const _newRecipe = { ...values };
					_newRecipe.userName = newRecipe.userName;
					handleFormSubmit(_newRecipe as IRecipe);
					console.log(JSON.stringify(values, null, 2));
					setSubmitting(false);
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
						{/* ================ Step 6 ================ */}
						{currStep === 5 && (
							<Step6
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
