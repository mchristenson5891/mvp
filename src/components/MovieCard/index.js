import { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { doLikeMovie, getLikes, doRemoveLikeMovie } from '@services/firestore';
import { useAuth } from '@hooks/useAuth';

import Link from 'next/link';

export default function MovieCard({ movie }) {
  const { user } = useAuth();
  const [likes, setLikes] = useState([]);

  useEffect(async () => {
    const m = await getLikes(movie.id);
    setLikes(m?.likes ? m.likes : []);
  }, [user]);

  const doUpdateLikedMovie = async () => {
    if (likes.includes(user.uid)) {
      await doRemoveLikeMovie(movie.id, user.uid);
      setLikes(likes.filter((l) => l !== user.uid));
    } else {
      try {
        await doLikeMovie(movie.id, user.uid);
        setLikes([...likes, user.uid]);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: 5,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        position: 'relative',
      }}
    >
      {user && (
        <>
          <IconButton
            aria-label='add to favorites'
            onClick={doUpdateLikedMovie}
            sx={{ marginLeft: 'auto', position: 'absolute', right: 0 }}
          >
            {likes.includes(user?.uid) ? (
              <FavoriteIcon sx={{ color: 'pink' }} fontSize='large' />
            ) : (
              <FavoriteBorderIcon sx={{ color: 'white' }} fontSize='large' />
            )}
          </IconButton>
        </>
      )}
      {movie.poster_path && (
        <CardMedia
          component='img'
          image={
            movie.poster_path &&
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
          alt={movie.title}
        />
      )}

      <CardContent>
        <Link href={`/movies/${movie.id}`}>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            color='primary'
            sx={{ cursor: 'pointer' }}
          >
            {movie.title}
          </Typography>
        </Link>
        <Typography variant='body2' color='text.secondary'>
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
