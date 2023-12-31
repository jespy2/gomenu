import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';
import { INutrition } from '../../../index.types';

interface IProps { 
  nutrition: INutrition | undefined;
  _tab: number;
  children: JSX.Element;
}

export const Tab3 = (props: IProps) => { 
  const { nutrition, _tab } = props;
  return (    
    <TabPanel value={_tab} index={3}>
      {props.children}
      <Box>
        <Typography component={'span'} variant="body1">Nutrition:</Typography>
          {nutrition && Object.keys(nutrition).map((item) => (
            <Box key={item}>
              <Typography component={'span'} variant="overline" color="text.secondary">{item}</Typography>
                <Typography component={'span'} variant="body2" color="text.secondary">{nutrition[item as keyof INutrition]}</Typography>
            </Box>
          ))}
      </Box>      
  </TabPanel> 
  )
};