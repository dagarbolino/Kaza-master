import React from 'react';
import {Link} from 'react-router-dom';

import Footer from '../sass/libs/scenes/footer/components/Footer';



export default function NotFoundPage() {

  return (


      <>
        <div className='error'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
  
          <Link to="/">Home from Link</Link>        </div>
  
        <Footer />
      </>
    );
  }
  








