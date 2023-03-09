import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
