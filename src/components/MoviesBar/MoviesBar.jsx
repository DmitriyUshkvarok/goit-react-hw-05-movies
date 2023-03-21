import css from './MoviesBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import SearchByYears from 'components/SearchByYear/SearchByYear';

function MoviesBar() {
  const location = useLocation();

  return (
    <div className={css.movieBarWrapper}>
      <ul className={css.movieBarList}>
        <li className={css.movieBarListItem}>
          <Link to={`/movie/actors/`} state={{ from: location }}>
            Actors
          </Link>
        </li>
      </ul>
      <div>
        <SearchByYears />
      </div>
    </div>
  );
}
export default MoviesBar;
