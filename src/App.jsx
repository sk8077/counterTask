import React from 'react';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './layout/layout';
import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';


const ProtectedRoute = ({ element }) => {
  const { user } = useSelector((state) => state.userState);

  if (user) {
    return element;
  } else {

    return <Login />;
  }
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <ProtectedRoute element={<Home />} />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
