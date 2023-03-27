import css from './MoviesItem.module.css';

function MoviesItem({ poster_path, title, vote_average, release_date }) {
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

  let ratingColor = '';
  if (vote_average <= 4) {
    ratingColor = css.red;
  } else if (vote_average < 7) {
    ratingColor = css.yellow;
  } else {
    ratingColor = css.green;
  }

  return (
    <>
      <div className={css.cardWrapper}>
        <div className={css.imgWrapper}>
          <img
            className={css.moviesImg}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://via.placeholder.com/300x400'
            }
            alt={title}
            width={300}
          />
        </div>
        <h3 className={css.cardTitle}>
          {title ? title : 'Movie without a title'}
        </h3>
        <div className={css.ratingStarsContainer}>
          <p className={css.ratingText}>{vote_average ? ratingStars : 'N/A'}</p>
          <div className={`${css.ratingBlock} ${ratingColor}`}>
            <span className={css.ratingNumber}>
              {vote_average ? vote_average.toFixed(1) : 'N/A'}
            </span>
          </div>
          <p className={css.moviesYear}>
            {release_date ? release_date.slice(0, 4) : 'N/A'}
          </p>
        </div>
      </div>
    </>
  );
}

export default MoviesItem;
