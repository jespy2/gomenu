import React, { useState, Dispatch, SetStateAction } from "react";

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
    <>
      <h2>Enter Recipe URL</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_url">Your URL</label>
        <input
          type="text"
          value={_userURL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}
