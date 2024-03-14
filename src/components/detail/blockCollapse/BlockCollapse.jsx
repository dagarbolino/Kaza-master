import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Collapse from '../../../utils/collapse/CollapseFunction.jsx';


function BlockCollapse() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const apiURL = process.env.PUBLIC_URL + '/data.json';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        const item = json.find((item) => item.id === id);
        setData(item);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, [apiURL, id]);

  if (!data) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className='blockCollapse'>
      <div className='descrip'>
        <Collapse title="Description">
          <p>{data.description}</p>
        </Collapse>
      </div>
      <div className='equip'>
        <Collapse title="Equipements">
          <ul>
            {data.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
export default BlockCollapse;
