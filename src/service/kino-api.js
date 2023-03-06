import axios from 'axios';
const URL = `https://api.themoviedb.org/3/`;
const key = 'f27eea818d2010463700365b0c06a16e';

function fetchTrending() {
  return axios
    .get(`${URL}trending/all/day?api_key=${key}`)
    .then(response => response.data)
    .catch(console.log('error'));
}

function fetchSearchMovie(query) {
  return axios
    .get(`${URL}search/movie?query=${query}?api_key=${key}`)
    .then(response => response.data)
    .catch(console.log('error'));
}

function fetchMovieDetalis(id) {
  return axios
    .get(`${URL}movie/${id}?api_key=${key}`)
    .then(response => response.data)
    .catch(console.log('error'));
}

function fetchMovieCredits(id) {
  return axios
    .get(`${URL}movie/${id}/credits?api_key=${key}`)
    .then(response => response.data)
    .catch(console.log('error'));
}

function fetchMovieReview(id) {
  return axios
    .get(`${URL}movie/${id}/reviews?api_key=${key}`)
    .then(response => response.data)
    .catch(console.log('error'));
}

export {
  fetchTrending,
  fetchSearchMovie,
  fetchMovieDetalis,
  fetchMovieCredits,
  fetchMovieReview,
};
