import { useNavigate } from 'react-router-dom';
import Footer from '../../../scenes/footer/components/Footer';

function ErrorPage() {
  
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className='error'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>

        <button className='returnAcceuil' onClick={returnHome}>Retourner sur la page d’accueil</button>
      </div>

      <Footer />
    </>
  );
}

export default ErrorPage;
