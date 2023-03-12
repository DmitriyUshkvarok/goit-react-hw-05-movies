import css from './MoviesItem.module.css';
import posterimg from '../../images/poster.jpeg';

function MoviesItem({ poster_path, title, popularity, vote_average }) {
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
        <p className={css.ganreListDetailsMain}>
          {popularity && <span>{(popularity * 0.1).toFixed(0)}%</span>}
        </p>
        <p>{vote_average.toFixed(1)}</p>
        <p>
          <span>&#9733;</span>
        </p>
      </div>
    </>
  );
}

export default MoviesItem;
