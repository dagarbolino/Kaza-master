import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';

import Home from './pages/home/Home.jsx';
import DetailPage from './pages/detail/Detail.jsx';
import About from './pages/about/About.jsx';
import NotFoundPage from './pages/error/NotFoundPage.jsx';







const router = createBrowserRouter([
      {
            path: '/',
            element: <Home />,
            errorElement: <NotFoundPage />,
      },


      {
            path: '/detail/:id',
            element: <DetailPage />,
            errorElement: <NotFoundPage />,
      },



      {
            path: '/about',
            element: <About />,
            errorElement: <NotFoundPage />,
      },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
);
