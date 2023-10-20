import React from "react";
import {
	Box,
	Divider,
	Grid,
	TextField,
} from "@mui/material";
import * as Yup from "yup";

import { RecipeReviewCard } from "../../../../components/recipe-card/RecipeReviewCard";
import FormStepper from "../../../../components/form-stepper/FormStepper";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";

export const Step6 = (props: IProps) => {
  const { newRecipe, paginationSteps, currStep, handleNextStep, handleLastStep, Formik } = props;

	return (
    <Box className={styles.stepContainer} sx={{width: '70% !important', margin: 'auto'}}>
								<h2>{paginationSteps[currStep]}</h2>
				{/*  NUTRITION */}
				
				<Box className={styles.stepRow} >
					<RecipeReviewCard recipe={Formik.values} />
				</Box>
								<Divider variant='fullWidth' className={styles.formDivider} />
								<FormStepper steps={paginationSteps} currStep={currStep} handleNextStep={handleNextStep} handleLastStep={handleLastStep} />
		</Box>
	);
};
