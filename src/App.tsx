import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Diet from './pages/Diet';
import GlobalStyles from './styles/GlobalStyles';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import { SignUpProvider } from './contexts/SignUpContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'create-account',
        element: (
          <SignUpProvider>
            <CreateAccount />
          </SignUpProvider>
        ),
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
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
