import { TextField } from '@mui/material';

export default function Searchbar({ setSearch }) {
  return (
    <TextField
      id='outlined-basic'
      label='Search for a movie'
      fullWidth
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
