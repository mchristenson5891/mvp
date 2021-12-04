import { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';
import { Box, Grid } from '@mui/system';
import Searchbar from '@components/Searchbar';
import { getPopularMovies, searchMovie } from '@api/index';
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [filterMovies, setFilterMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const { data } = await getPopularMovies(page);
      setMovies([...movies, ...data?.results]);
      setFilterMovies([...movies, ...data?.results]);
      setPage(data?.page + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMoreMovies = async () => {
    if (search.length <= 0) {
      fetchMovies();
    } else {
      const { data } = await searchMovie(search, page);
      setFilterMovies([...filterMovies, ...data.results]);
      setSearchPage(data.page + 1);
    }
  };

  useEffect(async () => {
    if (search.length <= 0) {
      setSearchPage(1);
      return setFilterMovies(movies);
    }
    try {
      const { data } = await searchMovie(search, searchPage);
      setFilterMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }, [search]);

  return (
    <>
      <Searchbar setSearch={setSearch} />

      <Box mt={4} display='flex' flexWrap='wrap' justifyContent='space-between'>
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {filterMovies.map((m, i) => (
            <MovieCard key={i} movie={m} />
          ))}
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default MovieList;
