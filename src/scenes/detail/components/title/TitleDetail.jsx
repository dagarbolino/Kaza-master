import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../../datas/FetchData';
import { locLists } from '../../../../dataLoc/localeLists.js';


function TitleDetail() {
  const { id } = useParams();
  const apiURL = `https://monapi.com/data/${id}`; // Remplacez par l'URL de l'API


  // Utilise le Hook 
  const data = useFetchData({ apiURL, localData: locLists });

  // Si les données ne sont pas encore chargées, cela affiche un message de chargement
  if (!data) {
    return <div>Chargement en cours...</div>;
  }


  const selectedData = data.find(item => item.id === id);

  // Si les données sélectionnées ne sont pas trouvées, cela affiche un message d'erreur
  if (!selectedData) {
    return <div>Données introuvables</div>;
  }


  return (
    <div className="detail-title">

      <div className="title">
        <h2>{selectedData.title}</h2>
        <p>{selectedData.location}</p>
      </div>

      <div className="tags">
        {selectedData.tags.map((tag, index) => (
          <button className='tag' key={index}>{tag}</button>
        ))}
      </div>



    </div>


  )
}

export default TitleDetail
