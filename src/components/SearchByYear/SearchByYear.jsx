import { useState, useEffect } from 'react';
import css from './SearchByYear.module.css';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function SearchByYears() {
  const [selectedYear, setSelectedYear] = useState(0);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (selectedYear !== 0) {
      const fetchMovies = async () => {
        setLoading(true);
        setShowButton(true);
        try {
          const newYear = await apiTheMovieDB.fetchByYear(page, selectedYear);
          setMovies(newYear);
          if (newYear.length === 0) {
            toast.error("sorry, that's all the movies we could find");
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [page, selectedYear]);

  if (error) {
    return <p>{error.message}</p>;
  }

  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 50; year--) {
    yearOptions.push(year);
  }

  const hendleIncrement = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.selectedWrapper}>
      <div className={css.selectedYear}>
        <label className={css.selectLabel} htmlFor="year-select">
          Select a year:
        </label>
        <div className={css.selectWrapper}>
          <Select
            className={css.select}
            classNamePrefix="react-select"
            name="year-select"
            id="year-select"
            value={{ value: selectedYear, label: selectedYear }}
            onChange={selectedOption => setSelectedYear(selectedOption.value)}
            options={yearOptions.map(year => ({ value: year, label: year }))}
            placeholder="Select a year"
            menuPlacement="auto"
          />
          <div className={css.selectIcon}>
            <FontAwesomeIcon icon={faFilm} />
          </div>
        </div>
      </div>

      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p className={css.searchText}>Please select a year to see movies.</p>
      )}
      {showButton && <ButtonLoadMore hendleIncrement={hendleIncrement} />}
    </div>
  );
}

export default SearchByYears;
