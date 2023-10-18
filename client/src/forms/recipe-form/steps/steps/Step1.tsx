import React from "react";
import {
	Box,
	Divider,
} from "@mui/material";
import * as Yup from "yup";

import FormStepper from "../../../../components/form-stepper/FormStepper";
import {
	TextBox,
	RatingInput,
} from "../../RecipeForm.conf";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";

export const Step1 = (props: IProps) => {
	const {
		Formik,
		newRecipe,
		paginationSteps,
		currStep,
		handleNextStep,
		handleLastStep,
	} = props;

	return (
		<Box className={styles.stepContainer}>
			<h2>{paginationSteps[currStep]}</h2>
			<p>
				We've grabbed your recipe. Please confirm the info below and click
				continue.
			</p>
			<Divider variant='fullWidth' className={styles.formDivider} />
			<Box className={styles.step1Container}>
				<Box className={styles.stepColumn}>
					<Box className={styles.stepSubContainer}>
						<h3>{newRecipe?.name}</h3>
						<Box>
							<img
								className={styles.recipeFormImage}
								src={newRecipe?.selectedImage}
								alt={newRecipe?.name}
							/>
						</Box>
					</Box>
				</Box>

				{/* DESCRIPTION */}
				<Box className={styles.stepColumn}>
					<TextBox label='description' name='description' type='text' />
					{/* RATING */}
					<RatingInput
						currValue={Formik.values.userRating ? Formik.values.userRating : 0}
						name='userRating'
					/>

					{/* USER COMMENTS */}
					<TextBox
						label='userComments'
						name='userComments'
						type='text'
						placeholder='Comments'
					/>
				</Box>
			</Box>
			<Divider variant='fullWidth' className={styles.formDivider} />
			<FormStepper
				steps={paginationSteps}
				currStep={currStep}
				handleNextStep={handleNextStep}
				handleLastStep={handleLastStep}
			/>
		</Box>
	);
};
