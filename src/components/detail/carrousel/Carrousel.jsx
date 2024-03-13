import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import nextIcon from '../../../assets/icons/next.png';
import previousIcon from '../../../assets/icons/previous.png';
import { locLists } from '../../../dataLoc/localeLists.js';
import useFetchData from '../../../service/FetchData.jsx'; 

function Carrousel() {


  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();
  const apiURL = `https://monapi.com/data/${id}`; 


 
  const data = useFetchData({ apiURL, localData: locLists });

  // Si les données ne sont pas encore chargées, cela affiche un message de chargement
  if (!data) {
    return <div>Chargement en cours...</div>;
  }


  // Trouve les données sélectionnées en fonction de l'ID de l'URL
  const selectedData = data.find(item => item.id === id);

  // Si les données sélectionnées ne sont pas trouvées, cela affiche un message d'erreur
  if (!selectedData) {
    return <div>Données introuvables pour l'identifiant : {id}</div>;
  }


  const images = selectedData.pictures;

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
