import React from 'react';
import { FormikErrors } from 'formik';

import { Dish } from './Dish';

import styles from './Ratings.module.scss';

interface IProps {
  count: number,
  handleClick: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<IProps>>
} 

export const Ratings = ({ count, handleClick }: IProps) => (
  <span className={styles.ratings}>
    {/* {[...Array(5).keys()].map(i => (
        <Dish idx={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
    ))} */}
  </span>
);