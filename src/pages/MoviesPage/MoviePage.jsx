import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './MoviePage.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import MoviesBar from 'components/MoviesBar/MoviesBar';

const MoviePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const fetchMovies = useCallback(
    page => {
      setHasMore(true);
      apiTheMovieDB
        .fetchSearchMovie(query, page)
        .then(newMovies => {
          if (newMovies.length === 0) {
            toast.error("sorry, that's all the movies we could find");
            setHasMore(false);
          } else {
            setMovies(prevMovies => [...prevMovies, ...newMovies]);
            setCurrentPage(page);
          }
        })
        .catch(error => {
          toast.error('Failed to fetch movies.');
        });
    },
    [query]
  );

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('query'));
    setCurrentPage(1);
  }, [location.search]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovies(1);
  }, [fetchMovies, query]);

  const handleFormSubmit = newQuery => {
    if (newQuery === query) {
      return;
    }
    setMovies([]);
    navigate(`?query=${newQuery}`);
  };

  const handleLoadMore = () => {
    fetchMovies(currentPage + 1);
  };

  return (
    <>
      <Container>
        <section className={css.searchbar}>
          <Searchbar onSubmit={handleFormSubmit} />
          <MoviesBar />
        </section>
        <section className={css.moviesListSearch}>
          {movies && (
            <InfiniteScroll
              dataLength={movies.length}
              next={handleLoadMore}
              hasMore={hasMore}
              loader={<p>Loading...</p>}
            >
              <MoviesList movies={movies} />
            </InfiniteScroll>
          )}
        </section>
      </Container>
    </>
  );
};

export default MoviePage;
