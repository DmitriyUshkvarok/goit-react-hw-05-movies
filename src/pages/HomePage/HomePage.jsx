// import PropTypes from 'prop-types';
import css from './HomePage.module.css';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
function HomePage() {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  useEffect(() => {
    apiTheMovieDB
      .fetchTrending()
      .then(movies => setMovies([...movies]))
      .catch('setError');
  }, []);
  return (
    <section className={css.trandingMovies}>
      <Container>{movies && <MoviesList movies={movies} />}</Container>
    </section>
  );
}
export default HomePage;

// HomePage.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape),
// };
