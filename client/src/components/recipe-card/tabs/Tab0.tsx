import React from 'react';
import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoTwoTone';
import WatchLaterIcon from '@mui/icons-material/WatchLaterTwoTone';
import SquareFootIcon from '@mui/icons-material/SquareFootTwoTone';
import SpeedIcon from '@mui/icons-material/SpeedTwoTone';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';

interface IProps { 
  recipeIngredient: string[] | undefined;
  _tab: number;
}

export const Tab0 = (props: IProps) => { 
  const { recipeIngredient, _tab } = props;
  return (    
          <TabPanel value={_tab} index={0}>
            <Box>
              <InfoIcon color="primary" />
              <WatchLaterIcon color="primary" />
              <SquareFootIcon color="primary" />
              <SpeedIcon color="primary" />
            </Box>

            <Box>
              <Typography component={'span'} variant="body1">Ingredients:</Typography>
              {recipeIngredient && recipeIngredient.map((item) => (
                <Box key={item}>
                  <Typography component={'span'} variant="body2" color="text.secondary">{item}</Typography>
                </Box>
              ))}
            </Box>        
          </TabPanel>
  )
};