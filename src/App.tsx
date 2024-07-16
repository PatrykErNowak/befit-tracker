import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Diet from './pages/Diet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      {
        element: <Navigate replace to="dashboard" />,
        index: true,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'diet',
        element: <Diet />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
