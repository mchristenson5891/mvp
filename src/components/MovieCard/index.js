import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function RecipeReviewCard({ movie }) {
  console.log(
    '🚀 ~ file: index.js ~ line 13 ~ RecipeReviewCard ~ movie',
    movie
  );
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: 5,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <CardMedia
        component='img'
        // height='194'
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon sx={{ color: 'pink' }} />
        </IconButton>
        <IconButton aria-label='add to watched'>
          <VisibilityIcon color='primary' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
