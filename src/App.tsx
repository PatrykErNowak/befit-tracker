import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SignUpProvider } from './contexts/SignUpContext';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

import LandingPage from './pages/Page/LandingPage';
const PageNotFound = lazy(() => import('./pages/Page/PageNotFound'));
const Login = lazy(() => import('./pages/App/Login'));
const CreateAccount = lazy(
  () => import('./pages/App/CreateAccount/CreateAccount')
);

const Dashboard = lazy(() => import('./pages/App/Dashboard'));
const Diet = lazy(() => import('./pages/App/Diet'));
const ManageMeal = lazy(() => import('./pages/App/ManageMeal'));
const Workout = lazy(() => import('./pages/App/Workout'));
const Places = lazy(() => import('./pages/App/Places'));
const Settings = lazy(() => import('./pages/App/Settings'));

import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';
import AuthProtectedRoute from './ui/AuthProtectedRoute';
import LoadingPage from './pages/App/LoadingPage';
import DietLayout from './layouts/DietLayout';

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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <AuthLayout />
          </Suspense>
        ),
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
            element: <DietLayout />,
            children: [
              {
                index: true,
                element: <Diet />,
              },
              {
                path: ':meal',
                element: <ManageMeal />,
              },
            ],
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
            path: 'settings',
            element: <Settings />,
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
