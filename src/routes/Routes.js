/* Containers */
import ErrorPage from '../containers/errorPage/ErrorPage';
import Home from '../containers/home/Home';
import MovieDetail from '../containers/movie/detail/MovieDetail';

/* Layouts */
import PublicLayout from '../layouts/publicLayout/PublicLayout';

export const routes = [
  {
    id: 3,
    exact: true,
    path: '/detail',
    Component: MovieDetail,
    Layout: PublicLayout,
    Access: 'Public',
  },
  {
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: PublicLayout,
    Access: 'Public',
  },
  {
    id: 0,
    exact: true,
    path: '*',
    Component: ErrorPage,
    Layout: PublicLayout,
    Access: 'Public',
  },
];