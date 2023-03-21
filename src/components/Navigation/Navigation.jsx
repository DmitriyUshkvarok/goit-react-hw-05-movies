import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className={css.navWrapper}>
      <nav className={css.navigation}>
        <NavLink className={css.navigationLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navigationLink} to="/movies">
          Movies
        </NavLink>
        <NavLink className={css.navigationLink} to="/registration">
          Registration
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
