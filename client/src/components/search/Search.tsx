import React, { ChangeEvent, FormEventHandler } from 'react';
import { Box, Button, TextField, TextFieldVariants } from '@mui/material';

interface ISearchProps {
  title: string;
  label: string;
  id: string;
  variant: TextFieldVariants;
  helperText?: string;
  value: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export const Search = (props: ISearchProps) => {
  const { title, label, id, variant, helperText, value, handleChange, handleSubmit } = props;

  return (
    <Box
      // className={styles.urlSearchContainer}
    >
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label={label}
          id={id}
          variant={variant}
          helperText={helperText}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Button color='secondary' variant='text' type='submit' value='Submit'>Submit</Button>
        </form>
        </Box>
  )
}