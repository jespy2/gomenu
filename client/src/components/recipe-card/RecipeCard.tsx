import React, { useState } from 'react';
import { Card } from '@mui/material';
import Collapse from '@mui/material/Collapse';

import { TabsContainer } from './tabs/TabsContainer';
import { TabsHeader } from './tabs/TabsHeader';
import { CardCover } from './cover/CardCover';

import { IProps } from './RecipeCard.config';

export const RecipeCard = (props: IProps) => { 
  const [expanded, setExpanded] = useState(false);
  const [_tab, set_Tab] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleTabClick = (event: React.SyntheticEvent, newValue: number) => {
    set_Tab(newValue);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardCover recipe={props.recipe} expanded={expanded} handleExpandClick={handleExpandClick} />   
      <Collapse in={expanded} timeout='auto' unmountOnExit>
          <TabsHeader handleTabClick={handleTabClick} _tab={_tab} />
          <TabsContainer recipe={props.recipe} _tab={_tab} />
        </Collapse>
    </Card>
  )
};