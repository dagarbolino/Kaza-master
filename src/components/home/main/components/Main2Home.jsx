import React from 'react';
import { Link, } from 'react-router-dom';

import UseFetchData from '../../../../../../service/FetchData.jsx';
import Card from "./components/card/Card.js";




async function Main() {
      try {
            const response = await fetch("../../../../../../../public/data.json");
            const datas = await response.json();
            const apiURL = '#'; // Remplacez par l'URL de l'API
            const data = UseFetchData({ apiURL, datas });

            if (!data) {
                  return <div>Chargement en cours...</div>;
            }

            return (
                  <div className="mainHome">
                        {data.map((item) => (
                              <Link key={item.id} to={`/detail/${item.id}`}>
                                    <Card
                                          title={item.title}
                                          imageUrl={item.cover}
                                          description={item.description}
                                    />
                              </Link>
                        ))}
                  </div>
            );
      } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
            return <div>Une erreur s'est produite lors du chargement des données.</div>;
      }
}

export default Main;
