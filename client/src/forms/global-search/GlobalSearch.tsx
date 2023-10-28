import React, { useState, Dispatch, SetStateAction, ChangeEvent, FormEvent } from "react";
import { Box } from '@mui/material';

import { Search } from '../../components/search/Search'

interface IGlobalSearchProps {
  setGlobalSearch: Dispatch<SetStateAction<string | undefined>>
}

export const GlobalSearch = (props: IGlobalSearchProps) => {
  const { setGlobalSearch } = props;
  const  [_searchTerm, set_SearchTerm] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _term = e.target.value && e.target.value !== '' ? e.target.value as string : undefined;
    setGlobalSearch(_term)
    set_SearchTerm(_term)
	}
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      global_search: HTMLInputElement
    }
    setGlobalSearch(formElements.global_search.value)
    console.log(formElements.global_search.value)
    //add logic for creating pills
  }

	return (
		<Box>
      <Search
        title="Search your recipes"
        label="Search"
        id="global_search"
        variant="standard"
        helperText='Enter a search term'
        value={_searchTerm}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        handleSubmit={handleSubmit}
      />
		</Box>
	)
}