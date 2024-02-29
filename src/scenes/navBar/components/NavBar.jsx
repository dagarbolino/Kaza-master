import { NavLink } from 'react-router-dom'

import img from '../../../assets/icons/logo.png'

const MainNavigation = () => {
      return (
            <>
                  <nav className="navBar">
                        <div className="__logo">
                              <img src={img} alt="logo" />
                        </div>

                        <div className="__menu">
                              <NavLink exact to="/" className="__acceuil" activeClassName="__active">
                                    Accueil
                              </NavLink>
                              <NavLink to="/about" className="__propos" activeClassName="__active">
                                    A Propos
                              </NavLink>
                        </div>
                  </nav>

            </>
      )
}

export default MainNavigation
