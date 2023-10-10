import React, { Dispatch, SetStateAction} from 'react';
import { URLSearch } from '../../forms/URLSearch';

import styles from './Navbar.module.scss';

export const Navbar = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  return (
    <div className={styles.navbarContainer}>
      <URLSearch setUserURL={setUserURL} />
    </div>
  )
}