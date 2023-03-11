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
    .then(response => response.data.results)
    .catch(this.onError);
}

const apiTheMovieDB = {
  fetchTrending,
  fetchSearchMovie,
  fetchMovieDetalis,
  fetchMovieCredits,
  fetchMovieReview,
  fetchTrailerMovies,
};

export default apiTheMovieDB;
