import React, { useState } from 'react';
import { Card, Collapse } from '@mui/material';

import { TabsContainer } from './tabs/TabsContainer';
import { TabsHeader } from './tabs/TabsHeader';
import { CardCover } from './cover/CardCover';

import { IProps } from './RecipeCard.config';

import styles from './RecipeCard.module.scss';

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
    <Card  className={styles.cardContainer} >
      <CardCover recipe={props.recipe} expanded={expanded} handleExpandClick={handleExpandClick} />   
      <Collapse in={expanded} timeout='auto' unmountOnExit  orientation="horizontal" >
        <TabsHeader handleTabClick={handleTabClick} _tab={_tab} />
        <TabsContainer recipe={props.recipe} _tab={_tab} />
      </Collapse>
    </Card>
  )
};