import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Ratting from './Ratting.jsx';


function TagRate() {
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

    <div className="host_rate">

      <div className="host">
        <p>{data.host.name}</p>
        <img src={data.host.picture} alt={data.host.name} />
      </div>
      <Ratting initialValue={data.rating} />
    </div>


  )
}

export default TagRate
