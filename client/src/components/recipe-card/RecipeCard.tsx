import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent, 
  Paper,
  Tab,
  Tabs
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchenTwoTone';
import InfoIcon from '@mui/icons-material/InfoTwoTone';
import WatchLaterIcon from '@mui/icons-material/WatchLaterTwoTone';
import SquareFootIcon from '@mui/icons-material/SquareFootTwoTone';
import SpeedIcon from '@mui/icons-material/SpeedTwoTone';

import Typography from '@mui/material/Typography';

import { RatingsDisplay } from '../ratings-display/RatingsDisplay'

import { IInstructionStep, INutrition, IRecipe } from '../../index.types';

import styles from './RecipeCard.module.scss';

type IProps = {
  recipe: IRecipe | undefined
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const RecipeCard = (props: IProps) => { 
  const [expanded, setExpanded] = useState(false);
  const [_tab, set_Tab] = useState(0);

  const {
    name,
    description,
    nutrition,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeCategory,
    recipeCuisine,
    recipeIngredient,
    recipeInstructions,
    selectedImage,
    cookingMethod,
    userRating,
    userComments
  } = props.recipe as IRecipe;

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleTabClick = (event: React.SyntheticEvent, newValue: number) => {
    set_Tab(newValue);
  };

  const instructions = recipeInstructions as IInstructionStep[]
  const rating = userRating ? userRating : 0
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box className={styles.recipeImageContainer}>
        <Box className={styles.imageOverlay} >
          <Box 
            className={styles.cardHeader}>
            <Typography variant='body1'>{description}</Typography>
            <Typography variant='h5'>{name}</Typography>
            <Box className={styles.headerRating}>
              <RatingsDisplay rating={rating} />
            </Box>
          </Box>
        </Box>
        <Box className={styles.recipeImage}>
        <img src={selectedImage} alt={name} />
        </Box>
        <Box className={styles.openTrayButton}>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          aria-label="show more"
          className={styles.openTrayButton}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </Box>
      
      
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={_tab} onChange={handleTabClick} aria-label="recipe tabs">
              <Tab label={<LocalGroceryStoreIcon color="primary" />} {...a11yProps(0)} sx={{minWidth: 'unset' }} />
          <Tab label={<SoupKitchenIcon color="primary" />} {...a11yProps(1)} />
          <Tab label={<SquareFootIcon color="primary" />} {...a11yProps(2)} />
          <Tab label={<InfoIcon color="primary" />} {...a11yProps(3)} />
          {/* <Tab label={<SoupKitchenIcon color="primary" />} {...a11yProps(4)} /> */}
          {/* <Tab label={<SoupKitchenIcon color="primary" />} {...a11yProps(5)} /> */}
        </Tabs>
          </Box>
          <CustomTabPanel value={_tab} index={0}>
            <Box>
              <InfoIcon color="primary" />
              <WatchLaterIcon color="primary" />
              <SquareFootIcon color="primary" />
              <SpeedIcon color="primary" />
            </Box>

            <Paper>
              <Typography variant="body1">Ingredients:</Typography>
              {recipeIngredient && recipeIngredient.map((item) => (
                <Box>
                  <Typography variant="body2" color="text.secondary">{item}</Typography>
                </Box>
              ))}
            </Paper>

        
          </CustomTabPanel>

          <CustomTabPanel value={_tab} index={1}>
            <Paper>
              <Typography variant="body1">Instructions:</Typography>
              {instructions && instructions.map((step) => (
                <Box>
                  <Typography variant="body2" color="text.secondary">{step.text}</Typography>
                </Box>
              ))}
            </Paper>        
          </CustomTabPanel>

          <CustomTabPanel value={_tab} index={2}>
          <Paper>
          <Typography variant="body1">Cooking Method:</Typography>
          <Typography variant="body2" color="text.secondary">
            {cookingMethod}
          </Typography>
          <Typography variant="body1">Category:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeCategory ? recipeCategory : 'None'}
          </Typography>
          <Typography variant="body1">Cuisine Type:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeCuisine ? recipeCuisine : 'None'}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="body1">Comments:</Typography>
          <Typography variant="body2" color="text.secondary">
            {userComments ? userComments : 'None'}
          </Typography>
        </Paper>


        <Paper>
          <Typography variant="body1">Prep Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {prepTime ? prepTime : 'None'}
          </Typography>
          <Typography variant="body1">Cook Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {cookTime ? cookTime : 'None'}
          </Typography>
          <Typography variant="body1">Total Time:</Typography>
          <Typography variant="body2" color="text.secondary">
            {totalTime ? totalTime : 'None'}
          </Typography>
          <Typography variant="body1">Servings:</Typography>
          <Typography variant="body2" color="text.secondary">
            {recipeYield ? recipeYield : 'None'}
          </Typography>
        </Paper>
          </CustomTabPanel>

          <CustomTabPanel value={_tab} index={3}>
            <Paper>
              <Typography variant="body1">Nutrition:</Typography>
              {nutrition && Object.keys(nutrition).map((item) => (
                <Box>
                <Typography variant="overline" color="text.secondary">{item}</Typography>
                  <Typography variant="body2" color="text.secondary">{nutrition[item as keyof INutrition]}</Typography>
                </Box>
              ))}
            </Paper>      
          </CustomTabPanel>                
        </CardContent>
        </Collapse>
    </Card>
  )
};