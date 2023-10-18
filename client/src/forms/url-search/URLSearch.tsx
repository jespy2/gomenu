import React, { useState, Dispatch, SetStateAction } from "react";
import { Box, Button, TextField } from '@mui/material';

import styles from './URLSearch.module.scss';

export const URLSearch = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {

  const [_userURL, set_UserURL] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_UserURL(e.target.value as string)
    console.log(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log(_userURL)
    setUserURL(_userURL)
    set_UserURL(''  as string)
    e.preventDefault();
  }

  return (
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
  )
}
