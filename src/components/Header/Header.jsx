import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';
import { FaReact } from 'react-icons/fa';

function Header() {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
        <div className={css.logo}>
          <FaReact className={css.reactLogo} />
          <span>Filmoteka on React</span>
        </div>
      </Container>
    </header>
  );
}

export default Header;
