import { createBrowserRouter } from 'react-router-dom';
import { Applayout } from './components/layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Sample from './pages/Sample';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'sample',
                element: <Sample />
            }
        ]
    },
    {
        path: '*',
        element: <NoMatch />
    }
]);
