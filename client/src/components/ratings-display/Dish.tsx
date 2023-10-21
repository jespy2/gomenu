import React from 'react';
import { useTheme } from '@mui/material/styles';

import { BowlFullIcon, BowlEmptyIcon } from '../../images';
import styles from './RatingsDisplay.module.scss';

interface IProps {
  idx: number,
  isFull: boolean,
  width?: string,
  color?: string,
}

export const Dish = (props: IProps) => {
  const { idx, isFull, width, color } = props;

  const theme = useTheme();

  return (
    <div key={idx}>
      {isFull
        ? <BowlFullIcon color={color ? color : theme.palette.primary.main} width='40' className={styles.dishFull}/>
        : < BowlEmptyIcon color={color ? color : theme.palette.primary.main} width='40' className={styles.dishEmpty} />
      }
    </div>
  )
}