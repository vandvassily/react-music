import React, { lazy, Suspense } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect, RouteComponentProps } from 'react-router-dom';

// 导入layout
import HomeLayout from '../layouts/HomeLayout';

type PropsType = RouteComponentProps & {};

const SuspenseComponent =
  (OtherComponent: React.FC<PropsType>) => (props: PropsType) => {
    return (
      <Suspense fallback={null}>
        <OtherComponent {...props}></OtherComponent>
      </Suspense>
    );
  };

const Recommend = lazy(() => import('../views/recommend/index'));
const About = lazy(() => import('../views/about/index'));
const Help = lazy(() => import('../views/help/index'));

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: HomeLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/about'} />,
      },

      {
        path: '/about',
        component: SuspenseComponent(About),
      },

      {
        path: '/help',
        component: SuspenseComponent(Help),
      },
      {
        path: '/recommend',
        component: SuspenseComponent(Recommend),
      },
    ],
  },
  // {
  //   path: '/recommend',
  //   component: SuspenseComponent(RecommendComponent),
  // },
];

// export default routes;
