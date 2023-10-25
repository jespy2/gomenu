import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';
import { IInstructionStep } from '../../../index.types';

interface IProps { 
  instructions: IInstructionStep[] | undefined;
  _tab: number;
  children: JSX.Element;
}

export const Tab1 = (props: IProps) => { 
  const { instructions, _tab } = props;
  
  return (    
    <TabPanel value={_tab} index={1}>
      {props.children}
      <Box>
        <Typography component={'span'} variant="body1">Instructions:</Typography>
        {instructions && instructions.map((step, idx) => (
          <Box key={`step${idx}`} >
            <Typography component={'span'} variant="body2" color="text.secondary">{step.text}</Typography>
          </Box>
        ))}
      </Box>        
  </TabPanel>
  )
};