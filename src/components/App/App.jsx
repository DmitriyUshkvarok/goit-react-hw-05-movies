import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import Header from 'components/Header/Header';
import ScrollToTop from 'react-scroll-to-top';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviePage'));
const MoviesDetalis = lazy(() =>
  import('../../pages/MovieDetalisPage/MovieDetalisPage')
);
const CastMovie = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <ScrollToTop className={css.scrolltotop} smooth />
      <Suspense fallback={<div className={css.loader}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetalis />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;