import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function TitleDetail() {
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
    <div className="detail-title">

      <div className="title">
        <h2>{data.title}</h2>
        <p>{data.location}</p>
      </div>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <button className='tag' key={index}>{tag}</button>
        ))}
      </div>
    </div>

  )
}

export default TitleDetail;