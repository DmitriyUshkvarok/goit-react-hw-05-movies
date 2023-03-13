import css from './HomePage.module.css';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import GenreList from 'components/GanreList/GanreList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [genres, setGenres] = useState([]);
  const [mounted, setMounted] = useState(false);

  const fetchMovies = useCallback(page => {
    setIsFetching(true);

    apiTheMovieDB
      .fetchTrending(page)
      .then(newMovies => {
        setIsFetching(false);
        if (newMovies.length === 0) {
          toast.error("sorry, that's all the movies we could find");
        }

        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setCurrentPage(page);
      })
      .catch(error => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (mounted && movies.length === 0) {
      fetchMovies(currentPage);
    }
  }, [currentPage, fetchMovies, movies.length, mounted]);

  useEffect(() => {
    apiTheMovieDB
      .fetchAllgenres()
      .then(data => {
        setGenres(data);
      })
      .catch('error');
  }, []);

  return (
    <section className={css.trandingMovies}>
      <Container>
        <GenreList genres={genres} />
        <InfiniteScroll
          dataLength={movies.length}
          next={() => fetchMovies(currentPage + 1)}
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
