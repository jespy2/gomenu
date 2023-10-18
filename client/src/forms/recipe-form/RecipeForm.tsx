import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormGroup,
  FormControlLabel,
  Grid,
  TextField
} from "@mui/material";
import * as Yup from "yup";

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

	return (
		<div className={styles.recipeFormContainer}>
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
							<Box className={styles.step}>
								<h2>{paginationSteps[currStep]}</h2>
								<p>
									We've grabbed your recipe. Please confirm the info below and
									click continue.
								</p>
								<Box className={styles.stepContainer}>
									<Box className={styles.stepSubContainer}>
										<h3>{recipe?.name}</h3>
										<Box>
											<img
												className={styles.recipeFormImage}
												src={newRecipe?.selectedImage}
												alt={recipe?.name}
											/>
										</Box>
									</Box>

									{/* DESCRIPTION */}

									<Box className={styles.stepSubContainer}>
										{/* <h3>Description</h3> */}
										<TextBox
											label='description'
											name='description'
											type='text'
										/>
										{/* RATING */}
										<h3>Rating</h3>
										<RatingInput
											currValue={
												Formik.values.userRating ? Formik.values.userRating : 0
											}
											name='userRating'
										/>

										{/* USER COMMENTS */}
										{/* <h3>Your comments</h3>                */}
										<TextBox
											label='userComments'
											name='userComments'
											type='text'
											placeholder='Comments'
										/>
										<Button
											className={styles.paginationNavButton}
											onClick={() => setCurrStep(currStep + 1)}
										>
											Continue
										</Button>
									</Box>
								</Box>
								<Divider variant='fullWidth' />
								<FormStepper steps={paginationSteps} currStep={currStep} />
							</Box>
						)}

						{/* ================ Step 2 ================ */}
						{currStep === 1 && (
							<Box className={styles.recipeFormSection}>
								<h2>{paginationSteps[currStep]}</h2>
								{/*  COOKING METHOD */}
								<h3>Cooking Method</h3>
								<FormGroup aria-label='position' row>
									{cookingmethods.map((method) => (
                    <FormControlLabel
                      key={method}
											value={method}
											control={<Checkbox />}
											label={method}
											labelPlacement='start'
										/>
									))}
								</FormGroup>
								<Box className={styles.recipeFormSubSection}>
									{/* CATEGORY */}
									<Box className={styles.narrowTextField}>
										<h3>Category</h3>
										<FieldFromArray name='recipeCategory' />
									</Box>

									{/* CUISINE */}
									<Box className={styles.narrowTextField}>
										<h3>Cuisine</h3>
										<FieldFromArray name='recipeCuisine' />
									</Box>
								</Box>
								<Box className={styles.recipeFormSubSection}>
									{/* PREP TIME */}
									<Box className={styles.narrowTextField}>
										<h3>Prep Time</h3>
										<TextInput label='prepTime' name='prepTime' type='text' />
									</Box>

									{/* COOK TIME */}
									<Box className={styles.narrowTextField}>
										<h3>Total Cook Time</h3>
										<TextInput label='cookTime' name='cookTime' type='text' />
									</Box>

									{/* YIELD */}
									<Box className={styles.narrowTextField}>
										<h3>Servings</h3>
										<TextInput
											label='recipeYield'
											name='recipeYield'
											type='text'
										/>
									</Box>
								</Box>

								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep - 1)}
								>
									Go Back
								</Button>
								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep + 1)}
								>
									Continue
								</Button>
								<Divider variant='fullWidth' />
								<FormStepper steps={paginationSteps} currStep={currStep} />
							</Box>
						)}

						{/* ================ Step 3 ================ */}
						{currStep === 2 && (
							<Box className={styles.recipeFormSection}>
								{/* INGREDIENTS */}
								<h3>Ingredients</h3>
								<FieldFromArray name='recipeIngredient' />

								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep - 1)}
								>
									Go Back
								</Button>
								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep + 1)}
								>
									Continue
                </Button>                
								<Divider variant='fullWidth' />
								<FormStepper steps={paginationSteps} currStep={currStep} />
							</Box>
						)}

						{/* ================ Step 4 ================ */}
						{currStep === 3 && (
							<Box className={styles.recipeFormSection}>
								{/* INSTRUCTIONS */}
								<h3>Instructions</h3>
								<FieldsFromInstructions name='recipeInstructions' />

								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep - 1)}
								>
									Go Back
								</Button>
								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep + 1)}
								>
									Continue
								</Button>
								<Divider variant='fullWidth' />
								<FormStepper steps={paginationSteps} currStep={currStep} />
							</Box>
						)}
						{/* ================ Step 5 ================ */}
						{currStep === 4 && (
							<Box className={styles.nutritionStepContainer} >
								<h2>{paginationSteps[currStep]}</h2>
								{/*  NUTRITION */}
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                  className={styles.nutritionSection}
                >
									{newRecipe.nutrition &&
										Object.keys(newRecipe.nutrition).map((key) => {
											return (
												key !== "@type" && (
													<Grid item xs={4}>
                            <TextField
                              className={styles.nutritionItem}
                              key={key}
															label={key}
															name={key}
															type='text'
															value={
																newRecipe.nutrition &&
																newRecipe.nutrition[
																	key as keyof typeof newRecipe.nutrition
																]
															}
														/>
													</Grid>
												)
											);
										})}
								</Grid>
								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep - 1)}
								>
									Go Back
								</Button>
								<Button
									className={styles.paginationNavButton}
									onClick={() => setCurrStep(currStep + 1)}
								>
									Continue
								</Button>
                
								{/*  SUBMIT  */}
                <Button type='submit'>Submit</Button>                
								<Divider variant='fullWidth' />
								<FormStepper steps={paginationSteps} currStep={currStep} />
							</Box>
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
};
