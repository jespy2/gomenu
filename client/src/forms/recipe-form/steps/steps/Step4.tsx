import React from "react";
import { Box, Divider } from "@mui/material";
import * as Yup from "yup";

import FormStepper from "../../../../components/form-stepper/FormStepper";
import { FieldsFromInstructions } from "../../RecipeForm.config";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";

export const Step4 = (props: IProps) => {
	const { paginationSteps, currStep, handleNextStep, handleLastStep } = props;

	return (
		<Box className={styles.recipeFormContainer}>
			<Box className={styles.stepContainer}>
				{/* INSTRUCTIONS */}
				<h3>Instructions</h3>
				<FieldsFromInstructions name='recipeInstructions' />

				<Divider variant='fullWidth' className={styles.formDivider} />
				<FormStepper
					steps={paginationSteps}
					currStep={currStep}
					handleNextStep={handleNextStep}
					handleLastStep={handleLastStep}
				/>
			</Box>
		</Box>
	);
};
