import { NavLink } from 'react-router-dom'
import Footer from '../../footer/components/Footer'

function Error() {
      return (
            <>
                  <div className='error'>
                        <h1>404</h1>
                        <h2>Oups! La page que vous demandez n'existe pas.</h2>

                        <NavLink to="/" className="acceuil">
                              Retourner sur la page d’accueil
                        </NavLink>

                  </div>

                  <Footer />
            </>
      )
}

export default Error
