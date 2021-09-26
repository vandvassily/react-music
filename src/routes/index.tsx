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
const HotBillboard = lazy(() => import('../views/hot-billboard'));
const Search = lazy(() => import('../views/search'));
const Song = lazy(() => import('../views/song'));

export const routes: RouteConfig[] = [
  {
    path: '/home',
    component: HomeLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        render: () => <Redirect to={'/home/recommend'} />
      },
      {
        path: '/home/recommend',
        exact: true,
        component: SuspenseComponent(Recommend)
      },
      {
        path: '/home/hot-billboard',
        component: SuspenseComponent(HotBillboard)
      },
      {
        path: '/home/search',
        component: SuspenseComponent(Search)
      }
    ]
  },
  {
    path: '/song/:id',
    component: SuspenseComponent(Song)
  },
  {
    path: '/about',
    component: SuspenseComponent(About)
  },
  {
    path: '/help',
    component: SuspenseComponent(Help)
  }
  // {
  //   path: '/recommend',
  //   component: SuspenseComponent(RecommendComponent),
  // },
];

// export default routes;
