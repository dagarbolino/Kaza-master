import { NavLink } from 'react-router-dom'


import img from '../../assets/icons/logo.png'


const MainNavigation = () => {
      return (
            <>
            

                                    <nav className="navBar">
                                          <div className="__logo">
                                                <img src={img} alt="logo" />
                                          </div>

                                          <div className="__menu">
                                                <NavLink  to="/" exact="true" className="__acceuil" activeclassname="__active">
                                                      Accueil
                                                </NavLink>
                                                <NavLink to="/about" className="__propos" activeclassname="__active">
                                                      A Propos
                                                </NavLink>
                                          </div>
                                    </nav>

            </>
      )
}

export default MainNavigation
