import React from 'react'
import { useParams } from 'react-router-dom';
import { locLists } from '../../../../datas/locLists.js';


function TitleDetail() {
  const { id } = useParams();
  const selectedData = locLists.find(data => data.id === id);

  if (!selectedData) {
    return <div>Carte introuvable</div>;
  }

  return (
  
      <div className="detail-title">
        <div className="title">
          <h2>{selectedData.title}</h2>
          <p>{selectedData.location}</p>
        </div>
        <div className="host">
          <p>{selectedData.host.name}</p>
          <img src={selectedData.host.picture} alt={selectedData.host.name} />
        </div>
      </div>

 
  )
}

export default TitleDetail
