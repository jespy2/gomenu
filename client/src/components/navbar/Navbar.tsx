import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { URLSearch } from '../../forms/url-search/URLSearch';

import styles from './Navbar.module.scss';

export const Navbar = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  const theme = useTheme();
  return (
    <Box className={styles.navbarContainer} sx={{ bgcolor: theme.palette.primary.light}}>
      <Box className={styles.navbarHeader} sx={{ bgcolor: theme.palette.secondary.light}} >
        <img src="/gomenu-logo.svg" alt="gomenu Logo" className={styles.navbarLogo} />
      </Box>
      <div className={styles.navbarBody}>
        <URLSearch setUserURL={setUserURL}  />
      </div>
    </Box>
  )
}