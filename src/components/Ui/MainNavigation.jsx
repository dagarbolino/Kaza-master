import { NavLink } from 'react-router-dom'



import Hero from './Hero'
import img from '../../assets/logo.png'

const MainNavigation = () => {
      return (
            <>
                  <nav className="navBar">
                        <div className="__logo">
                              <img src={img} alt="logo" />
                        </div>

                        <div className="__menu">
                              <NavLink to="/" className="__acceuil">
                                    Accueil
                              </NavLink>
                              <NavLink to="/about" className="__propos">
                                    A Propos
                              </NavLink>
                        </div>
                  </nav>
                  <Hero />

            </>
      )
}

export default MainNavigation
