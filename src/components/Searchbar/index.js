import { TextField } from '@mui/material';

export default function Searchbar({ setSearch, doSearchMovie }) {
  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      doSearchMovie();
    }
  };
  return (
    <TextField
      id='outlined-basic'
      label='Search for a movie'
      fullWidth
      onChange={(e) => setSearch(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}
