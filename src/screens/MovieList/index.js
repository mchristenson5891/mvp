import { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';
import { Box } from '@mui/system';
import Searchbar from '@components/Searchbar';
import { getPopularMovies, searchMovie } from '@api/index';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(async () => {
    async function fetchMovies() {
      try {
        const { data } = await getPopularMovies();
        setMovies(data?.results);
        setFilterMovies(data?.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  const onChange = async (search) => {
    if (search.length <= 0) {
      return setFilterMovies(movies);
    }
    try {
      const { data } = await searchMovie(search);
      setFilterMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Searchbar onChange={onChange} />
      <Box mt={4}>
        {filterMovies.map((m, i) => (
          <MovieCard key={i} movie={m} />
        ))}
      </Box>
    </>
  );
};

export default MovieList;
