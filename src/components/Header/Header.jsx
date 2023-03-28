import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';
import { FaReact } from 'react-icons/fa';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.navigationWrapper}>
          <ThemeSwitcher />
          <Navigation />
          <div className={css.logo}>
            <Link to='/'>
              <FaReact className={css.reactLogo} />
              <span>Filmoteka on React</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
