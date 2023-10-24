import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { RatingsDisplay } from '../../ratings-display/RatingsDisplay';
import { ExpandMore } from '../ExpandMore';
import { IRecipe } from '../../../index.types';

import styles from '../RecipeCard.module.scss';

interface ICardCoverProps { 
  recipe: IRecipe | undefined;
  expanded?: boolean;
  handleExpandClick?: () => void;
  thumbnail?: boolean;
}

export const CardCover = (props: ICardCoverProps) => { 
  const { recipe, expanded, handleExpandClick, thumbnail } = props;
  const { name, description, userRating, selectedImage } = recipe as IRecipe;

  const rating = userRating ? userRating : 0

  return (
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
        {!thumbnail &&
          <ExpandMore
            expand={expanded as boolean}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          // className={styles.openTrayButton}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        </Box>
      </Box>
  )
}