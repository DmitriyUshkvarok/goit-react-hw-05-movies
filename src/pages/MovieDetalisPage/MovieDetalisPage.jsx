import { GiReturnArrow } from 'react-icons/gi';
import css from './MovieDetalis.module.css';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import apiTheMovieDB from 'service/kino-api';
import posterimg from '../../images/poster.jpeg';
import YouTube from 'react-youtube';

function MovieDetalis() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [trailerId, setTrailerId] = useState(null);
  const [urlModal, setUrlModal] = useState(false);

 const backLink = location.state?.from ?? '/';

  function handleFetchTrailer() {
    apiTheMovieDB.fetchTrailerMovies(movieId).then(videos => {
      const trailer = videos.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerId(trailer.key);
        setUrlModal(true);
        document.body.style.overflow = 'hidden';
      } else {
        setUrlModal(false);
        toast.error('No trailer available for this movie.');
      }
    });
  }

  useEffect(() => {
    apiTheMovieDB
      .fetchMovieDetalis(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch('error');
  }, [movieId]);

  useEffect(() => {
    window.addEventListener('keydown', clickKeyDown);

    return () => {
      window.removeEventListener('keydown', clickKeyDown);
    };
  });

  function closeModal() {
    setUrlModal(false);
    setTrailerId(null);
    document.body.style.overflow = 'auto';
  }

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const clickKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {movie && (
        <section className={css.detalis}>
          <img
            className={css.posrerMovie}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : posterimg
            }
            alt={movie.title}
          />
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
                  style={{ cursor: 'pointer' }}
                  onClick={handleFetchTrailer}
                />
                {urlModal && trailerId ? (
                  <div className={css.videoBackdrop} onClick={clickBackdrop}>
                    <GiReturnArrow
                      className={css.iconBackModal}
                      onClick={closeModal}
                    />

                    <YouTube
                      className={css.videoModal}
                      videoId={trailerId}
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1,
                          controls: 0,
                          cc_load_policy: 0,
                          fs: 0,
                          iv_load_policy: 0,
                          modestbranding: 0,
                          rel: 0,
                          showinfo: 0,
                        },
                        origin: 'http://localhost:3000',
                      }}
                    />
                  </div>
                ) : (
                  <p>No trailer available for this movie.</p>
                )}
              </div>
            </div>
            <ul className={css.reviewList}>
              <li className={css.reviewiLstItem}>
                <Link to="cast" state={location.state} className={css.cast}>
                  Cast
                </Link>
              </li>

              <li className={css.reviewiLstItem}>
                <Link to="review" state={location.state} className={css.review}>
                  Rewiew
                </Link>
              </li>
            </ul>
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      )}
    </>
  );
}

export default MovieDetalis;
