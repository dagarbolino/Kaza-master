import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../../datas/locLists';

function Carrousel() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const selectedData = locLists.find(data => data.id === id);

  const images = selectedData.pictures;

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='carrousel'>
      <img src={images[currentImage]} alt={`carrousel ${currentImage}`} />
      <button className='btnDetail previous' onClick={previousImage}><i class="fa-solid fa-chevron-left"></i></button>
      <button className='btnDetail next' onClick={nextImage}><i class="fa-solid fa-chevron-right"></i></button>
      <span>{currentImage + 1}/{images.length}</span>
    </div>
  );
}

export default Carrousel;

