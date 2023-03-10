import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './MoviePage.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';

const MoviePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = useCallback(
    page => {
      apiTheMovieDB
        .fetchSearchMovie(query, page)
        .then(newMovies => {
          if (newMovies.length === 0) {
            toast.error('sorry ,thats all the movies we cold find');
            setHasMore(false);
          }
          setMovies(prevMovies => [...prevMovies, ...newMovies]);
          setCurrentPage(prevPage => prevPage + 1);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [query]
  );

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('query'));
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
    fetchMovies(currentPage);
  };

  return (
    <section className={css.searchbar}>
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
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
