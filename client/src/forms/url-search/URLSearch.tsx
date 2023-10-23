import React, { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField } from '@mui/material';

import { IRecipe } from '../../index.types';
import apis from '../../api';

import styles from './URLSearch.module.scss';

export const URLSearch = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  const [_userURL, set_UserURL] = useState<string>('');
  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  const navigate = useNavigate();
	
	const handleFormSubmit = async (values: IRecipe) => {
		await apis.insertRecipe(values)
			.then((res) => {
				console.log(res)
      })
      .then(() => navigate('/recipecard'))
	}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_UserURL(e.target.value as string)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    setUserURL(_userURL)
    set_UserURL(''  as string)
    e.preventDefault();
  }

  return (
<Container disableGutters={true} maxWidth={false} >
    <h1 style={{textAlign: 'center'}}>Welcome back, username</h1>
    <Box className={styles.navbarButtonsContainer}>
      <Button variant="contained" onClick={ () => setShowSearch(!showSearch)}>Grab a new recipe</Button>
      <Button variant="contained" onClick={() => navigate('/cookbook')} >Go to my cookbook</Button>
    </Box>
    <Box className={styles.urlSearchContainer}>
      <h2>Enter Recipe URL</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your URL"
          id="user_url"
          variant="standard"
          helperText='Enter a URL from a recipe on a website'
          value={_userURL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Button color='secondary' variant='text' type='submit' value='Submit'>Submit</Button>
      </form>
      </Box>
      </Container>
  )
}
