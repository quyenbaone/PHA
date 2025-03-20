import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/search',
        component: lazy(() => import('@pages/SearchResults/SearchResults'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/auth',
        component: lazy(() => import('@pages/Auth/Auth'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        component: lazy(() => import('@pages/DetailProduct/DetailProduct'))
    }
];

export default routers;