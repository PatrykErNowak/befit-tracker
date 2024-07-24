import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Diet from './pages/Diet';
import CreateAccount from './pages/CreateAccount/CreateAccount';

import { SignUpProvider } from './contexts/SignUpContext';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

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
