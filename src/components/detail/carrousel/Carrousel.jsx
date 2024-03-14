import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import nextIcon from '../../../assets/icons/next.png';
import previousIcon from '../../../assets/icons/previous.png';


function Carrousel() {

  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState(null);
  const { id } = useParams();
  const apiURL = process.env.PUBLIC_URL + '/data.json';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        const item = json.find((item) => item.id === id);
        setData(item);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, [apiURL, id]);

  if (!data) {
    return <div>Chargement en cours...</div>;
  }

  const images = data.pictures;

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='carrousel'>
      <img src={images[currentImage]} alt={`carrousel ${currentImage + 1}`} />
      <div className='btnDetail'>
        <button className='btnDetail previous' onClick={previousImage}>
          <img src={previousIcon} alt="Précédent" />
        </button>
        <button className='btnDetail next' onClick={nextImage}>
          <img src={nextIcon} alt="Suivant" />
        </button>
        <span>{currentImage + 1}/{images.length}</span>
      </div>
    </div>
  );
}

export default Carrousel;