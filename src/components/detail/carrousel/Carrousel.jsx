import React, { useState } from 'react';


import nextIcon from '../../../assets/icons/next.png';
import previousIcon from '../../../assets/icons/previous.png';



function Carrousel({ data }) {


  const [currentImage, setCurrentImage] = useState(0);
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

