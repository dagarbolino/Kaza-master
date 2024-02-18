import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './components/Ui/Pages/home.jsx'
import About from './components/Ui/Pages/about.jsx'
import Error from './components/Ui/Error/index.jsx'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <Router>
                  <App /> {/* <App /> iPage de l'application */}
                  <Routes>
                        <Route path="/" element={<Home />} /> {/* <Home /> iPage de l'acceuil */}
                        <Route path="/about" element={<About />} /> {/* <About /> iPage de a propos */}
                        <Route path="*" element={<Error/>} /> 
                  </Routes>
            </Router>
      </React.StrictMode>
)

reportWebVitals()
