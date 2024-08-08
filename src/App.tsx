import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import LandingPage from './pages/Page/LandingPage';
import PageNotFound from './pages/Page/PageNotFound';
import Login from './pages/App/Login';
import Dashboard from './pages/App/Dashboard';
import Diet from './pages/App/Diet';
import CreateAccount from './pages/App/CreateAccount/CreateAccount';

import AuthLayout from './layouts/AuthLayout';

import { SignUpProvider } from './contexts/SignUpContext';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import AppLayout from './layouts/AppLayout';
import AuthProtectedRoute from './ui/AuthProtectedRoute';
import Profile from './pages/App/Profile';
import Workout from './pages/App/Workout';
import Places from './pages/App/Places';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: 'app',
    children: [
      {
        element: <AuthLayout />,
        children: [
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
        ],
      },

      {
        element: (
          <AuthProtectedRoute>
            <AppLayout />
          </AuthProtectedRoute>
        ),
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
          {
            path: 'workout',
            element: <Workout />,
          },
          {
            path: 'places',
            element: <Places />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />

        <RouterProvider router={router}></RouterProvider>

        <Toaster
          position="top-center"
          toastOptions={{
            className: 'toast',
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
