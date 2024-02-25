import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../../../../datas/locLists';

import next from '../../../../assets/icons/next.png';
import previous from '../../../../assets/icons/previous.png';


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
      <div className='btnDetail'>
        <button className='btnDetail previous' onClick={previousImage}>
          <img src={previous} alt="previous" />
        </button>
        <button className='btnDetail next' onClick={nextImage}>
          <img src={next} alt="next" />
        </button>
<span>{currentImage + 1}/{images.length}</span>
      </div>
      

    </div>
  );
}

export default Carrousel;

