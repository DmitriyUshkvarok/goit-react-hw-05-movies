import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
// import posterimg from '../../images/poster.jpeg';
import css from './ActorsMoviesPage.module.css';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import { useParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const ActorsMoviePage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiTheMovieDB
      .fetchMoviesbyActors(id)
      .then(movies => {
        setMovies(movies);
        if (movies.length === 0) {
          toast.error("sorry, that's all the actors we could find");
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoading(false));
  }, [id]);

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={css.actorsMovies}>
            {}
            <MoviesList movies={movies} />
          </div>
        )}
      </Container>
      ;
    </>
  );
};

export default ActorsMoviePage;
