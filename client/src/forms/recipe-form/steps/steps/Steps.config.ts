import { FormikProps } from 'formik';
import { IRecipe } from "../../../../index.types";


export interface IProps { 
  Formik: FormikProps<IRecipe>;
  newRecipe: IRecipe;
  paginationSteps: string[];
  currStep: number;
  handleNextStep: () => void;
  handleLastStep: () => void;
}