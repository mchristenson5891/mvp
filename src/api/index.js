import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
});

export const getPopularMovies = (page) =>
  baseUrl({
    method: 'GET',
    url: '/movie/popular',
    params: {
      page,
    },
  });

export const searchMovie = (query, page) =>
  baseUrl({
    method: 'GET',
    url: '/search/movie',
    params: {
      query,
      page,
    },
  });
