import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiTheMovieDB from 'service/kino-api';
import css from './Reviews.module.css';
import Container from 'components/Container/Container';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    apiTheMovieDB
      .fetchMovieReview(movieId)
      .then(setReviews)
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Container>
        <div className={css.reviewList}>
          {reviews && reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <div className={css.reviewListItem} key={id}>
                <p className={css.author}>Author: {author}</p>

                <p className={css.content}>Content:{content}</p>
              </div>
            ))
          ) : (
            <p>No review members found</p>
          )}
        </div>
      </Container>
    </>
  );
}
export default Review;
