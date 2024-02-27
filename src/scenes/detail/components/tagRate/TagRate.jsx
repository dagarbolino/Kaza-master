import React from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../../../../datas/locLists.js';

import Ratting from '../../../../components/function/ratting/Ratting.jsx';


function TagRate() {

  const { id } = useParams();
  const selectedData = locLists.find(data => data.id === id);

  if (!selectedData) {
    return <div>Carte introuvable</div>;
  }


  return (

    <div className="tag_rate">
      <div className="tags">

        {selectedData.tags.map((tag, index) => (
          <button className='tag' key={index}>{tag}</button>
        ))}

      </div>
      <Ratting initialValue={selectedData.rating} />
    </div>


  )
}

export default TagRate
