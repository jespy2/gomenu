import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

import { URLSearch } from '../../forms/url-search/URLSearch';

import styles from './Navbar.module.scss';

export const Navbar = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  const theme = useTheme();
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  return (
    <Box className={styles.navbarContainer} sx={{ bgcolor: theme.palette.primary.light }}>
      <Box className={styles.navbarHeader} sx={{ bgcolor: theme.palette.secondary.light}} >
        <img src="/gomenu-logo.svg" alt="gomenu Logo" className={styles.navbarLogo} />
      </Box>
      <h1 style={{textAlign: 'center'}}>Welcome back, username</h1>
      <Box className={styles.navbarButtonsContainer}>
        <Button variant="contained" onClick={ () => setShowSearch(!showSearch)}>Grab a new recipe</Button>
        <Button variant="contained">Go to my cookbook</Button>
      </Box>
      {showSearch && <URLSearch setUserURL={setUserURL} />}
    </Box>
  )
}