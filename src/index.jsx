import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'


import Detail from './Pages/detail/Detail.jsx'
import Home from './Pages/home/Home.jsx'
import About from './Pages/about/About.jsx'
import ErrorPage from '../src/components/function/hooks/errorUseNav.jsx'


import './index.css'

import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <Router>
                  <App /> {/* <App /> iPage de l'application */}
                  <Routes>
                        <Route path="/" element={<Home />} /> {/* <Home /> iPage de l'acceuil */}
                        <Route path="/about" element={<About />} /> {/* <About /> iPage de a propos */}
                        <Route path="/detail/:id" element={<Detail />} /> {/* <Detail /> iPage de detail */}
                        <Route path="*" element={<ErrorPage />} />
                  </Routes>
            </Router>
      </React.StrictMode>
)

reportWebVitals()
