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

  const fetchMovies = useCallback(page => {
    apiTheMovieDB
      .fetchTrending(page)
      .then(newMovies => {
        if (newMovies.length === 0) {
          toast.error('sorry ,thats all the movies we cold find');
        }
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setCurrentPage(prevPage => prevPage + 1);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleLoadMore() {
    fetchMovies(currentPage);
  }

  useEffect(() => {
    fetchMovies(currentPage);
  }, [fetchMovies, currentPage]);

  return (
    <section className={css.trandingMovies}>
      <InfiniteScroll
        dataLength={movies.length}
        next={handleLoadMore}
        hasMore={true}
        loader={<p>Loading...</p>}
      >
        <Container>
          <MoviesList movies={movies} />
        </Container>
      </InfiniteScroll>
    </section>
  );
}

export default HomePage;
