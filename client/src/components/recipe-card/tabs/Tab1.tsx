import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { TabPanel } from './TabPanel';
import { IInstructionStep } from '../../../index.types';

interface IProps { 
  instructions: IInstructionStep[] | undefined;
  _tab: number;
}

export const Tab1 = (props: IProps) => { 
  const { instructions, _tab } = props;
  
  return (    
    <TabPanel value={_tab} index={1}>
    <Box>
      <Typography variant="body1">Instructions:</Typography>
      {instructions && instructions.map((step) => (
        <Box>
          <Typography variant="body2" color="text.secondary">{step.text}</Typography>
        </Box>
      ))}
    </Box>        
  </TabPanel>
  )
};