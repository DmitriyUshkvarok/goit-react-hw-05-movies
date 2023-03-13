import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import apiTheMovieDB from 'service/kino-api';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';

function GenrePage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await apiTheMovieDB.fetchByGenre(id, currentPage);
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    } catch (error) {
      toast.error('Failed to fetch movies.');
    }
  }, [id, currentPage]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await apiTheMovieDB.fetchByGenre(id, 1);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [id]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchMovies();
    }
  }, [fetchMovies, currentPage]);

  return (
    <div>
      <h2>Movies by genre</h2>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={movies.length < totalPages}
        loader={<h4>Loading...</h4>}
      >
        <MoviesList movies={movies} />
      </InfiniteScroll>
    </div>
  );
}

export default GenrePage;
