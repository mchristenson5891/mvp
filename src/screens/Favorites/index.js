import { getUserLikedMovies } from '@services/firestore';
import { useAuth } from '@hooks/useAuth';
import { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';

const Favorites = () => {
  const { user } = useAuth();
  const [movieIds, setMoviesIds] = useState([]);
  useEffect(async () => {
    try {
      const t = await getUserLikedMovies(user?.uid);
      setMoviesIds(t);
    } catch (err) {
      console.log(err);
    }
  }, [user]);
  return (
    <div>
      {movieIds.map((id) => (
        <FavoriteMovie id={id} />
      ))}
    </div>
  );
};

const FavoriteMovie = ({ id }) => {
  const [movie, setMovie] = useState([]);
  useEffect(async () => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=a49f54964bff87d56fb1fa2a30a36827`
        );
        const results = await response.json();
        setMovie(results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, [id]);
  return <MovieCard movie={movie} isFavorite />;
};

export default Favorites;
