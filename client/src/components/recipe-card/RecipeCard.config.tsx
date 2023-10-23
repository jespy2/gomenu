import { IRecipe } from '../../index.types';

export type IProps = {
  recipe: IRecipe | undefined
}
  
export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}