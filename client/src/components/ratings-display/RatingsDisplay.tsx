import React from 'react';
import { Box, Typography } from '@mui/material';

import { Dish } from './Dish';

import styles from './RatingsDisplay.module.scss';

export const RatingsDisplay = ({ rating }: {rating: number}) => {
  let component = [];
  for (let i = 1; i <= 5; i++) {
    const _id = i.toString();
    component.push(
      <Typography key={_id} variant="body2" color="text.secondary">
        <Dish idx={i} isFull={i <= rating} />
      </Typography>
    )
  }
  return (
    <Box >
      <Box className={styles.ratingContainer} role='group' aria-labelledby='userRating'>
        {component}
      </Box>
    </Box>
  )
};