import React, { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

import { URLSearch } from '../../forms/url-search/URLSearch';
import { Header } from './components/Header';

import styles from './Navbar.module.scss';

export const Navbar = (
  props: PropsWithChildren
) => {
  const theme = useTheme();
  return (
    <Box className={styles.navbarContainer} sx={{ bgcolor: theme.palette.primary.light }}>
      <Header />
      {props.children}
    </Box>
  )
}