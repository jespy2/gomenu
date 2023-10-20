import React, { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import styles from './Header.module.scss';

export const Header = (props: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <Box className={styles.navbarHeader} sx={{ bgcolor: theme.palette.secondary.light}} >
      <img src="/gomenu-logo.svg" alt="gomenu Logo" className={styles.navbarLogo} />
      {props.children}
    </Box>
  )
}