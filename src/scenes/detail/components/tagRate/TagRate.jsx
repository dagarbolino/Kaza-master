import React from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../../../../dataLoc/localeLists.js';
import useFetchData from '../../../../datas/FetchData';

import Ratting from '../../../../components/function/ratting/Ratting.jsx';


function TagRate() {

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
