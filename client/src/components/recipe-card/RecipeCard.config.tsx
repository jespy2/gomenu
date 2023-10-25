import { Box } from '@mui/system';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';import { IRecipe } from '../../index.types';
import { deleteRecipeById } from '../../api';

import styles from './RecipeCard.module.scss';

export type IProps = {
  recipe: IRecipe | undefined
}
  
export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export const CardActionsMenu = ({ id }: {id: string}) => {
  const handleDelete = async () => {
    await deleteRecipeById(id)
      .then(() => console.log('deleted'))
      .then(() => window.location.reload())
  }
  return (
    <Box className={styles.cardActionsMenu}>
      <DeleteForeverTwoToneIcon  sx={{color: 'secondary.main'}} onClick={ () => handleDelete()} />
      <EditTwoToneIcon sx={{color: 'primary.dark'}} />
    </Box>
  )
}