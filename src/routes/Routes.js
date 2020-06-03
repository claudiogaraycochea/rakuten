/* Containers */
import ErrorPage from '../containers/errorPage/ErrorPage';
import Home from '../containers/home/HomeContainer';
import MovieDetail from '../containers/movie/detail/MovieDetail';

/* Layouts */
import PublicLayout from '../layouts/publicLayout/PublicLayoutContainer';

export const routes = [
  {
    id: 3,
    exact: true,
    path: '/movie',
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