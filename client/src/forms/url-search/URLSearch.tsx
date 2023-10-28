import React, { useState, Dispatch, SetStateAction } from "react";
import { Box } from '@mui/material';

import { Search } from "../../components/search/Search";

export const URLSearch = (
  { setUserURL } : { setUserURL: Dispatch<SetStateAction<string | undefined>>}
) => {
  const [_userURL, set_UserURL] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_UserURL(e.target.value as string)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    setUserURL(_userURL)
    set_UserURL(''  as string)
    e.preventDefault();
  }

  return (
    <Box>
      <Search
        label="Your URL"
        id="user_url"
        variant="standard"
        helperText='Enter a URL from a recipe on a website'
        value={_userURL}
        handleChange={handleChange}
        handleSubmit={handleSubmit}  
      />
    </Box>
  )
}
