import axios from 'axios';
const URL = `https://api.themoviedb.org/3/`;
const key = 'f27eea818d2010463700365b0c06a16e';

function fetchTrending(page = 1) {
  return axios
    .get(`${URL}trending/all/day?api_key=${key}&page=${page}`)
    .then(response => response.data.results);
}

function fetchSearchMovie(query, page = 1) {
  return axios
    .get(`${URL}search/movie?query=${query}&api_key=${key}&page=${page}`)
    .then(response => response.data.results);
}

function fetchMovieDetalis(id) {
  return axios
    .get(`${URL}movie/${id}?api_key=${key}`)
    .then(response => response.data);
}

function fetchMovieCredits(id) {
  return axios
    .get(`${URL}movie/${id}/credits?api_key=${key}`)
    .then(response => response.data);
}

function fetchMovieReview(id) {
  return axios
    .get(`${URL}movie/${id}/reviews?api_key=${key}`)
    .then(response => response.data.results);
}

function fetchTrailerMovies(movieId) {
  return axios
    .get(`${URL}movie/${movieId}/videos?api_key=${key}`)
    .then(response => response.data.results);
}

function fetchAllgenres() {
  return axios
    .get(`${URL}/genre/movie/list?api_key=${key}`)
    .then(response => response.data.genres);
}

function fetchByGenre(id, page = 1) {
  return axios
    .get(`${URL}/discover/movie?api_key=${key}&with_genres=${id}&page=${page}`)
    .then(response => response.data);
}

function fetchActors(page = 1, query = '') {
  const url = query
    ? `${URL}search/person?api_key=${key}&page=${page}&query=${query}`
    : `${URL}person/popular?api_key=${key}&page=${page}`;
  return axios.get(url).then(response => response.data);
}

function fetchMoviesbyActors(id, page = 1) {
  return axios
    .get(`${URL}person/${id}/movie_credits?api_key=${key}&page=${page}`)
    .then(response => response.data.cast);
}

function fetchByYear(page = 1, selectedYear) {
  return axios
    .get(
      `${URL}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&primary_release_year=${selectedYear}`
    )
    .then(response => response.data.results);
}

function fetchExpectedMovies() {
  return axios
    .get(`${URL}/movie/upcoming?api_key=${key}`)
    .then(response => response.data.results);
}

const apiTheMovieDB = {
  fetchMoviesbyActors,
  fetchTrending,
  fetchSearchMovie,
  fetchMovieDetalis,
  fetchMovieCredits,
  fetchMovieReview,
  fetchTrailerMovies,
  fetchAllgenres,
  fetchByGenre,
  fetchActors,
  fetchByYear,
  fetchExpectedMovies,
};

export default apiTheMovieDB;
