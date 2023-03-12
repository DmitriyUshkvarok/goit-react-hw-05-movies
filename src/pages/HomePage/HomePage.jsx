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
      });
  }, [currentPage]);

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies, fetchMovies]);

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
