import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../../datas/locLists';


function Carrousel() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const selectedData = locLists.find(data => data.id === id);

  const images = selectedData.cover;
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='carrousel'>
      <img src={selectedData[currentImage]} alt={`carrousel ${currentImage}`} />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Carrousel;
