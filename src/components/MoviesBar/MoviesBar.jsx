import css from './MoviesBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import SearchByYears from 'components/SearchByYear/SearchByYear';

function MoviesBar() {
  const location = useLocation();

  return (
    <div className={css.movieBarWrapper}>
      <ul className={css.movieBarList}>
        <Link to={`/movie/actors/`} state={{ from: location }}>
          <li className={css.movieBarListItem}>Actors</li>
        </Link>
        <SearchByYears />
      </ul>
    </div>
  );
}
export default MoviesBar;
