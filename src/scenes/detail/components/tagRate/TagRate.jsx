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

    <div className="host_rate">

      <div className="host">
        <p>{selectedData.host.name}</p>
        <img src={selectedData.host.picture} alt={selectedData.host.name} />
      </div>


      <Ratting initialValue={selectedData.rating} />

    </div>


  )
}

export default TagRate
