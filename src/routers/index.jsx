import Auth from '@pages/Auth/Auth';
import HomePage from '@pages/HomePage/HomePage';
import OurShop from '@pages/OurShop/OurShop';
import SearchResults from '@pages/SearchResults/SearchResults';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/our-shop',
        element: <OurShop />
    },
    {
        path: '/search',
        element: <SearchResults />
    },
    {
        path: '/auth',
        element: <Auth />
    }
]);

export default router; 