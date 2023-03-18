import css from './MoviesItem.module.css';
import posterimg from '../../images/poster.jpeg';

function MoviesItem({ poster_path, title, vote_average }) {
  const percentRating = vote_average * 10; // convert 0-10 rating to percentage
  const goldStars = Math.floor(percentRating / 10); // number of gold stars
  // eslint-disable-next-line no-unused-vars
  const grayStars = 10 - goldStars; // number of gray stars

  // create an array of stars with the appropriate color
  const ratingStars = Array.from({ length: 10 }, (_, i) => {
    if (i < goldStars) {
      return (
        <span key={`star-${i}`} className={css.goldStar}>
          &#9733;
        </span>
      );
    } else {
      return (
        <span key={`star-${i}`} className={css.grayStar}>
          &#9733;
        </span>
      );
    }
  });

  return (
    <>
      <div className={css.cardWrapper}>
        <div className={css.imgWrapper}>
          <img
            className={css.moviesImg}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : posterimg
            }
            alt={title}
            width={150}
          />
        </div>
        <h3 className={css.cardTitle}>
          {title ? title : 'Movie without a title'}
        </h3>
        <div className={css.ratingStarsContainer}>
          <p className={css.ratingText}>{vote_average ? ratingStars : 'N/A'}</p>
          <span className={css.ratingNumber}>
            {vote_average ? vote_average.toFixed(1) : 'N/A'}
          </span>
        </div>
      </div>
    </>
  );
}

export default MoviesItem;
