import React, { useState } from 'react';
import { FormikErrors } from 'formik';

import styles from './Ratings.module.scss';

interface IProps {
  idx: number,
  currValue: number,
  // onClick: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<IProps>>
}

export const Dish = (props: IProps) => {
  const {
    idx,
    currValue
  } = props;
  const [isFull, setIsFull] = useState(false)
  
  const handleClick = (idx: any) => {
    console.log('clicked: ', idx)
    console.log('currValue: ', currValue)
    console.log(idx < currValue)
    setIsFull(idx < currValue ? true : false)
  }
  return (
    <div key={idx}>
      {isFull
        ? <
          img src="/bowl-full-2.svg"
          alt="gomenu Logo"
          className={styles.dish}
          onClick={() => handleClick(idx)}
        />
        : <
          img src="/bowl-empty.svg"
          alt="gomenu Logo"
          className={styles.dish}
          onClick={() => handleClick(idx)}
        />
      }
    </div>
  )
}