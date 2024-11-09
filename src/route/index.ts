import RouteProps from './RouteProps';
import { lazy } from 'react';

const LoginInitiator = lazy(() => import('../login/common-components/LoginIniator'));

const routes: RouteProps[] = [
    {
        path: '/',
        title: 'Auracle',
        element: LoginInitiator
    },
    {
        path: '/sign-up',
        title: 'Auracle',
        element: LoginInitiator
    },
    {
      path: '/sign-in',
      title: 'Auracle',
      element: LoginInitiator
  }
]

export default routes;