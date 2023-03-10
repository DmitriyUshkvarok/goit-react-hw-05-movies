import css from './HomePage.module.css';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiTheMovieDB
      .fetchTrending()
      .then(movies => setMovies([...movies]))
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className={css.trandingMovies}>
      <Container>{movies && <MoviesList movies={movies} />}</Container>
    </section>
  );
}
export default HomePage;
