import React, { useEffect, useState } from 'react';
import { FormikErrors } from 'formik';

import styles from './Ratings.module.scss';

interface IProps {
  idx: number,
  isFull: boolean,
  // onClick: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<IProps>>
}

export const Dish = (props: IProps) => {
  const { idx, isFull } = props;

  return (
    <div key={idx}>
      {isFull
        ? <
          img src="/bowl-full-2.svg"
          alt="gomenu Logo"
          className={styles.dish}
        />
        : <
          img src="/bowl-empty.svg"
          alt="gomenu Logo"
          className={styles.dish}
        />
      }
    </div>
  )
}