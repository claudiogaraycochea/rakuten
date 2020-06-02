import About from '../components/About';
import PublicLayout from '../layouts/publicLayout/PublicLayout';

export const routes = [
  {
    id: 1,
    exact: true,
    path: '/',
    Component: About,
    Layout: PublicLayout,
    Access: 'Public',
  },
];