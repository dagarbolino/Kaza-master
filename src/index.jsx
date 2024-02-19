import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'
import Error from './components/Ui/Error/index.jsx'
import Home from './components/Ui/Pages/Home.jsx'
import About from './components/Ui/Pages/About.jsx'
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
                        <Route path="*" element={<Error />} />
                  </Routes>
            </Router>
      </React.StrictMode>
)

reportWebVitals()
