import { useState, useEffect } from 'react';
import css from './ActorsPage.module.css';
import Container from 'components/Container/Container';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import posterimg from '../../images/poster.jpeg';
import ReactPaginate from 'react-paginate';

function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const { results, total_pages } = await apiTheMovieDB.fetchActors(
          currentPage
        );
        if (results.length === 0) {
          toast.error("sorry, that's all the actors we could find");
        }
        setActors(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchActors();
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className={css.actorList}>
            {actors.map(
              (
                { profile_path, name, known_for_department, popularity, id },
                index
              ) => (
                <li className={css.actorListItem} key={`${id}-${index}`}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : posterimg
                    }
                    alt={name}
                    width={200}
                  />
                  <p className={css.actorsName}>{name}</p>
                  <p className={css.actorsDepartment}>{known_for_department}</p>
                  <p className={css.actorsRating}>
                    {(popularity * 0.5).toFixed(0)}%
                  </p>
                </li>
              )
            )}
          </ul>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName={css.pagination}
            pageClassName={css.page}
            activeClassName={css.active}
            previousClassName={css.previous}
            nextClassName={css.next}
            disabledClassName={css.disabled}
            breakClassName={css.break}
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
          />
        </>
      )}
    </Container>
  );
}

export default ActorsPage;
