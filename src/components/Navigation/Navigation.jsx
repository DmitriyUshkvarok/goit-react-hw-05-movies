import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className={css.navWrapper}>
      <nav className={css.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
