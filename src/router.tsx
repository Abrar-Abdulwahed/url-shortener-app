import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import GuestLayout from './layouts/GuestLayout';
const router = createBrowserRouter([
	{
		path: '',
		element: <GuestLayout />,
		children: [
            {
				path: '/',
				element: <Homepage />,
            },
        ],
	},

]);

export default router;