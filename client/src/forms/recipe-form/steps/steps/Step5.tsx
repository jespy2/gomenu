import React from "react";
import {
	Box,
	Divider,
	Grid,
	TextField,
} from "@mui/material";
import * as Yup from "yup";

import FormStepper from "../../../../components/form-stepper/FormStepper";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";

export const Step5 = (props: IProps) => {
  const { newRecipe, paginationSteps, currStep, handleNextStep, handleLastStep } = props;

	return (
    <Box className={styles.stepContainer} sx={{width: '70% !important', margin: 'auto'}}>
								<h2>{paginationSteps[currStep]}</h2>
				{/*  NUTRITION */}
				
				<Box className={styles.stepRow} >
					{newRecipe.nutrition &&
						Object.keys(newRecipe.nutrition).map((key) => {
							return (
								key !== "@type" && (
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
								)
							);
						})
					}
				</Box>
								<Divider variant='fullWidth' className={styles.formDivider} />
								<FormStepper steps={paginationSteps} currStep={currStep} handleNextStep={handleNextStep} handleLastStep={handleLastStep} />
		</Box>
	);
};
