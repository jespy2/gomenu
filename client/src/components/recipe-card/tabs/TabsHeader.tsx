import React from 'react';
import { Box, CardContent, Tab, Tabs } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchenTwoTone';
import InfoIcon from '@mui/icons-material/InfoTwoTone';
import SquareFootIcon from '@mui/icons-material/SquareFootTwoTone';

import { a11yProps } from '../RecipeCard.config';

import styles from '../RecipeCard.module.scss';

interface ITabsHeaderProps { 
  _tab: number;
  handleTabClick: (event: React.SyntheticEvent, newValue: number) => void;
}

export const TabsHeader = (props: ITabsHeaderProps) => { 
  const { _tab, handleTabClick } = props;
  return (
      <CardContent className={styles.collapsibleTabHeader} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={_tab} onChange={handleTabClick} aria-label="recipe tabs">
            <Tab label={<LocalGroceryStoreIcon color="primary" />} {...a11yProps(0)} sx={{minWidth: 'unset' }} />
            <Tab label={<SoupKitchenIcon color="primary" />} {...a11yProps(1)} />
            <Tab label={<SquareFootIcon color="primary" />} {...a11yProps(2)} />
          <Tab label={<InfoIcon color="primary" />} {...a11yProps(3)} />
          </Tabs>
        </Box>
      </CardContent>
  )
}