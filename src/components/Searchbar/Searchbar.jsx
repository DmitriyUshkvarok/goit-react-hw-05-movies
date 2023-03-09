import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.error('Please, enter your name movie!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.inputSearch}
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        placeholder="Enter the movie name"
        onChange={handleQueryChange}
      />
      <button type="submit" className={css.serchBtn}>
        Search
      </button>
    </form>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
