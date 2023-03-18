import { useState, useEffect } from 'react';
import css from './ActorsPage.module.css';
import Container from 'components/Container/Container';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import posterimg from '../../images/poster.jpeg';

function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const newActors = await apiTheMovieDB.fetchActors();
        if (newActors.length === 0) {
          toast.error("sorry, that's all the movies we could find");
        }
        setActors(newActors);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchActors();
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.actorList}>
          {actors.map(
            (
              { profile_path, name, known_for_department, popularity, id },
              index
            ) => (
              <li key={`${id}-${index}`}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : posterimg
                  }
                  alt={name}
                  width={100}
                />
                <p>{name}</p>
                <p>{known_for_department}</p>
                <p>{popularity}</p>
              </li>
            )
          )}
        </ul>
      )}
    </Container>
  );
}

export default ActorsPage;
