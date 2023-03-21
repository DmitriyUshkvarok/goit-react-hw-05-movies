import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ hendleIncrement }) => {
  return (
    <div>
      <button
        className={css.btnLoadMore}
        type="button"
        onClick={() => hendleIncrement()}
      >
        Load More
      </button>
    </div>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  handleIncrement: PropTypes.func,
};
