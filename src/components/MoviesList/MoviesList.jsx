import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import MoviesItem from 'components/MoviesItem/MoviesItem';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(
        ({ id, poster_path, title, popularity, vote_average }, index) => (
          <li key={`${id}-${index}`} className={css.moviesItem}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MoviesItem
                id={id}
                poster_path={poster_path}
                title={title}
                popularity={popularity}
                vote_average={vote_average}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      popularity: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
