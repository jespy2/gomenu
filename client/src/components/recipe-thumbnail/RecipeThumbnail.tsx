import React from 'react';
import { Card } from '@mui/material';
import { CardCover } from '../recipe-card/cover/CardCover';

import { IRecipe } from '../../index.types';

import styles from './RecipeThumbnail.module.scss';

export const RecipeThumbnail = ({recipe}: {recipe: IRecipe}) => { 
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardCover recipe={recipe} thumbnail={true} />   
    </Card>
  )
};