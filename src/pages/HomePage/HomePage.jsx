import css from './HomePage.module.css';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = useCallback(() => {
    setIsFetching(true);

    apiTheMovieDB
      .fetchTrending(currentPage)
      .then(newMovies => {
        setIsFetching(false);

        if (newMovies.length === 0) {
          toast.error('sorry ,thats all the movies we cold find');
        }

        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setCurrentPage(prevPage => prevPage + 1);
      })
      .catch(error => {
        setIsFetching(false);
        console.error(error);
      });
  }, [currentPage]);

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies, fetchMovies]);

  return (
    <section className={css.trandingMovies}>
      <Container>
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMovies}
          hasMore={!isFetching}
          loader={<p>Loading...</p>}
        >
          <MoviesList movies={movies} />
        </InfiniteScroll>
      </Container>
    </section>
  );
}

export default HomePage;
