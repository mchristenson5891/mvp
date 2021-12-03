import { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const response = await fetch();
    const movies = await response.json();
    setMovies(movies.results);
  }, []);
  return (
    <div>
      {movies.map((m, i) => (
        <MovieCard key={i} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
