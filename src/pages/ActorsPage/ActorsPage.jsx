import { useState, useEffect } from 'react';
import css from './ActorsPage.module.css';
import Container from 'components/Container/Container';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { useLocation, Link } from 'react-router-dom';

function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredActors = actors.filter(actor =>
    actor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <div className={css.search}>
        <input
          className={css.inputActors}
          type="text"
          placeholder="Search actors"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Link className={css.btnBack} type="button" to={backLink}>
        Go Back
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className={css.actorList}>
            {filteredActors.map(
              (
                { profile_path, name, known_for_department, popularity, id },
                index
              ) => (
                <Link to={`/actors/movies/${id}`} key={id}>
                  <li className={css.actorListItem} key={`${id}-${index}`}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                          : 'https://via.placeholder.com/200x300'
                      }
                      alt={name}
                      width={200}
                    />
                    <p className={css.actorsName}>{name}</p>
                    <p className={css.actorsDepartment}>
                      {known_for_department}
                    </p>
                    <p className={css.actorsRating}>
                      {(popularity * 0.5).toFixed(0)}%
                    </p>
                  </li>
                </Link>
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
