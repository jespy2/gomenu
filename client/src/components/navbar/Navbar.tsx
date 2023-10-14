import React, { Dispatch, SetStateAction} from 'react';
import { URLSearch } from '../../forms/URLSearch';

import styles from './Navbar.module.scss';

export const Navbar = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarHeader}>
        <img src="/gomenu-logo.svg" alt="gomenu Logo" className={styles.navbarLogo} />
      </div>
      <div className={styles.navbarBody}>
        <URLSearch setUserURL={setUserURL}  />
      </div>
    </div>
  )
}