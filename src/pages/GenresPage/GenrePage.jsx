// import { useEffect, useState, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import apiTheMovieDB from 'service/kino-api';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import MoviesList from 'components/MoviesList/MoviesList';
// import { toast } from 'react-toastify';

// function GenrePage() {
//   const { id } = useParams();
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await apiTheMovieDB.fetchByGenre(id, 1);
//       setMovies(data.results);
//     };
//     fetchMovies();
//   }, [id]);

//   return (
//     <div>
//       <h2>Movies by genre</h2>
//       <MoviesList movies={movies} />
//     </div>
//   );
// }

// export default GenrePage;

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

  const fetchMovies = useCallback(async () => {
    try {
      const data = await apiTheMovieDB.fetchByGenre(id, currentPage);
      setMovies(prevMovies => [...prevMovies, ...data.results]);
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      toast.error('Failed to fetch movies.');
    }
  }, [id, currentPage]);

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [fetchMovies, movies.length]);

  return (
    <div>
      <h2>Movies by genre</h2>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <MoviesList movies={movies} />
      </InfiniteScroll>
    </div>
  );
}

export default GenrePage;
