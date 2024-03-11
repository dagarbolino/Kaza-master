import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../../../../../components/function/collapse/CollapseFunction';
import { locLists } from '../../../../../../dataLoc/localeLists.js';
import useFetchData from '../../../../../../service/FetchData.jsx'; // Assurez-vous que le chemin d'accès est correct


function BlockCollapse() {
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
    <div className='blockCollapse'>
      <div className='descrip'>
        <Collapse title="Description">
          <p>{selectedData.description}</p>
        </Collapse>
      </div>

      <div className='equip'>
        <Collapse title="Equipements">
          <ul>
            {selectedData.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default BlockCollapse;
