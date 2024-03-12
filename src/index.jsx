import React from 'react'
import ReactDOM from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './style.css'


import Home from './Pages/home/Home.jsx'
import DetailPage from './Pages/detail/DetailPage.jsx'
import About from './Pages/about/About.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'

import ProfilesPage from './Pages/ProfilesPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'







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
            path: '/profiles',
            element: <ProfilesPage />,
      },

      {
            path: '/profile/:id',
            element: <ProfilePage />,
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

)




