import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { toggleTheme } from 'redux/themeSlice';
import { lightTheme, darkTheme } from 'styles';
import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  // eslint-disable-next-line no-unused-vars
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    console.log('rere');
  };
  return (
    <button className={css.btnSwitcher} onClick={handleThemeToggle}>
      {isDarkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
};

export default ThemeSwitcher;
