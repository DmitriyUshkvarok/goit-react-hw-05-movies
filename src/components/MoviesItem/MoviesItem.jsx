import css from './MoviesItem.module.css';
import posterimg from '../../images/poster.jpeg';

function MoviesItem({ poster_path, title }) {
  return (
    <>
      <div className={css.cardWrapper}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : posterimg
          }
          alt={title}
          width={300}
        />
        <h3 className={css.cardTitle}>
          {title ? title : 'Movie without a title'}
        </h3>
      </div>
    </>
  );
}

export default MoviesItem;
