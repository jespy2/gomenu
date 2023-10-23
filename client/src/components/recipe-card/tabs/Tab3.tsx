import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';
import { INutrition } from '../../../index.types';

interface IProps { 
  nutrition: INutrition | undefined;
  _tab: number;
}

export const Tab3 = (props: IProps) => { 
  const { nutrition, _tab } = props;
  return (    
    <TabPanel value={_tab} index={3}>
    <Box>
      <Typography variant="body1">Nutrition:</Typography>
      {nutrition && Object.keys(nutrition).map((item) => (
        <Box>
        <Typography variant="overline" color="text.secondary">{item}</Typography>
          <Typography variant="body2" color="text.secondary">{nutrition[item as keyof INutrition]}</Typography>
        </Box>
      ))}
    </Box>      
  </TabPanel> 
  )
};