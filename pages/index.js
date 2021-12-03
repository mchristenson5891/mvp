import Button from '@components/Button';
import Layout from '@layout/index';
import MovieList from '@screens/MovieList';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <>
      <Box mt={5} />
      <MovieList />
    </>
  );
}
