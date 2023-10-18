import React from "react";
import {
	Box,
	Divider,
} from "@mui/material";
import * as Yup from "yup";

import FormStepper from "../../../../components/form-stepper/FormStepper";
import {
	FieldFromArray,
} from "../../RecipeForm.conf";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";


export const Step3 = (props: IProps) => {
  const { paginationSteps, currStep, handleNextStep, handleLastStep } = props;

	return (
    <Box className={styles.stepContainer}>
      {/* INGREDIENTS */}
      <FieldFromArray name='recipeIngredient' />      
      <Divider variant='fullWidth' className={styles.formDivider} />
      <FormStepper steps={paginationSteps} currStep={currStep} handleNextStep={handleNextStep} handleLastStep={handleLastStep} />
    </Box>
	);
};
