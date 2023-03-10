import { GiReturnArrow } from 'react-icons/gi';
import css from './MovieDetalis.module.css';
import Container from 'components/Container/Container';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
import posterimg from '../../images/poster.jpeg';

function MovieDetalis() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    apiTheMovieDB.fetchMovieDetalis(movieId).then(setMovie).catch('error');
  }, [movieId]);

  return (
    <>
      {movie && (
        <section className={css.detalis}>
          <Container>
            <div className={css.detalisWrapper}>
              <div className={css.columnInfo}>
                <Link className={css.btnBack} type="button" to={backLink}>
                  <GiReturnArrow className={css.iconBack} />
                  Go Back
                </Link>
                <h2 className={css.infoTitle}>
                  {movie.title ? movie.title : 'Movie without a title'}
                </h2>
                <p className={css.scoreDetalis}>
                  User score: {(movie.vote_average * 10).toFixed(0)}%
                </p>
                <h3 className={css.overviewTitle}>Overview</h3>
                <p className={css.overview}>
                  {movie.overview ? movie.overview : 'Movie without a overview'}
                </p>
                <ul className={css.ganreListDetails}>
                  {movie.genres &&
                    movie.genres.map(({ name, id }) => (
                      <li key={id}>{name}</li>
                    ))}
                </ul>
              </div>
              <div className={css.columnImg}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : posterimg
                  }
                  alt={movie.title ? movie.title : 'Movie without a title'}
                  width={300}
                  className={css.detalisImg}
                />
              </div>
            </div>
            <ul className={css.reviewList}>
              <li className={css.reviewiLstItem}>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location }}
                  className={css.cast}
                >
                  Cast
                </Link>
              </li>

              <li className={css.reviewiLstItem}>
                <Link
                  to={`/movies/${movieId}/review`}
                  state={{ from: location }}
                  className={css.review}
                >
                  Rewiew
                </Link>
              </li>
            </ul>
            <Outlet />
          </Container>
        </section>
      )}
    </>
  );
}

export default MovieDetalis;
