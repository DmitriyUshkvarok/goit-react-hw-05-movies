import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiTheMovieDB from 'service/kino-api';
import css from './Cast.module.css';

function CastMovie() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    apiTheMovieDB
      .fetchMovieCredits(movieId)
      .then(data => {
        setCast(data.cast);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <ul className={css.castList}>
        {cast && cast.length > 0 ? (
          cast.map(({ profile_path, name, id }) => (
            <li className={css.castItem} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                alt={name}
                width={200}
              />
              <p className={css.castName}>{name}</p>
            </li>
          ))
        ) : (
          <p>No cast members found</p>
        )}
      </ul>
    </>
  );
}

export default CastMovie;
