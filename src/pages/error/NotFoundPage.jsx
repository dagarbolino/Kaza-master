import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';



export default function NotFoundPage() {

  return (


    <>

      <NavBar />
      <div className='error'>


        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>

        <Link className='returnAcceuil' to="/">Retourner sur la page d’accueil</Link>

      </div>

      <div className='footer'>
        <Footer />
      </div>

    </>
  );
}









