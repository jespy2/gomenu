import React from "react";
import {
	Box,
	Checkbox,
	Divider,
	FormGroup,
	FormControlLabel,
} from "@mui/material";
import * as Yup from "yup";

import FormStepper from "../../../../components/form-stepper/FormStepper";
import {
	TextInput,
	FieldFromArray,
	cookingmethods,
} from "../../RecipeForm.conf";
import { IProps } from "./Steps.config";

import styles from "../../RecipeForm.module.scss";

export const Step2 = (props: IProps) => {
  const { paginationSteps, currStep, handleNextStep, handleLastStep } = props;

	return (
    <Box className={styles.stepContainer}>
      <h2>{paginationSteps[currStep]}</h2>
      {/*  COOKING METHOD */}
      <label style={{alignSelf: 'start'}}>Cooking Method</label>
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
      <Box className={styles.stepRow} sx={{mt: 5}}>
        {/* CATEGORY */}
        <Box className={styles.narrowTextField}>
          <FieldFromArray name='recipeCategory' />
        </Box>

        {/* CUISINE */}
        <Box className={styles.narrowTextField}>
          <FieldFromArray name='recipeCuisine' />
        </Box>
      </Box>
      <Box className={styles.stepRow}  sx={{mt: 5}}>
        {/* PREP TIME */}
        <Box className={styles.narrowTextField}>
          <TextInput label='prepTime' name='prepTime' type='text' />
        </Box>

        {/* COOK TIME */}
        <Box className={styles.narrowTextField}>
          <TextInput label='cookTime' name='cookTime' type='text' />
        </Box>

        {/* YIELD */}
        <Box className={styles.narrowTextField}>
          <TextInput
            label='recipeYield'
            name='recipeYield'
            type='text'
          />
        </Box>
      </Box>
      
      <Divider variant='fullWidth' className={styles.formDivider} />
      <FormStepper steps={paginationSteps} currStep={currStep} handleNextStep={handleNextStep} handleLastStep={handleLastStep} />
  </Box>
	);
};
