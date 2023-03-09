import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './MoviePage.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import apiTheMovieDB from 'service/kino-api';

const MoviePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  //   const [error, setError] = useState(null);

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('query'));
  }, [location.search]);

  useEffect(() => {
    query &&
      apiTheMovieDB.fetchSearchMovie(query).then(setMovies).catch('error');
  }, [query]);

  const handleFormSubmit = newQuery => {
    if (newQuery === query) {
      return;
    }

    setMovies(null);
    navigate(`?query=${newQuery}`);
  };

  return (
    <section className={css.searchbar}>
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
        {movies && <MoviesList movies={movies} />}
        {movies?.length === 0 && (
          <p>
            Oops! We couldn’t find anything =/. Change your request, please!
          </p>
        )}
      </Container>
    </section>
  );
};

export default MoviePage;
