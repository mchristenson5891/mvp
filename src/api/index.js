import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
});

export const getPopularMovies = () => baseUrl.get(`/movie/popular`);

export const searchMovie = (query) =>
  baseUrl({
    method: 'GET',
    url: '/search/movie',
    params: {
      query,
    },
  });
