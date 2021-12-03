import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Item, Box, Typography } from '@mui/material';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState({});
  console.log('🚀 ~ file: index.js ~ line 9 ~ Movie ~ movie', movie);
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign='center'>
        <Box>
          <Typography gutterBottom variant='h4' component='div'>
            {movie.title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          loading='lazy'
          style={{ maxWidth: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' color='text.secondary'>
          {movie.overview}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Box>xs=8</Box>
      </Grid>
    </Grid>
  );
}
