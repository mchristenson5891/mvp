import { TextField } from '@mui/material';

export default function Searchbar({ onChange }) {
  return (
    <TextField
      id='outlined-basic'
      label='Search for a movie'
      fullWidth
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
