import React from 'react';
import { Link } from 'react-router-dom';
import { locLists } from '../../../../../../dataLoc/localeLists.js';
import UseFetchData from '../../../../../../service/FetchData.jsx';
import Card from "./components/card/Card";

function Main() {
      const apiURL = '#'; // Remplacez par l'URL de l'API

      const data = UseFetchData({ apiURL, localData: locLists });

      if (!data) {
            return <div>Chargement en cours...</div>;
      }

      return (
            <div className="mainHome">
                  {data.map((item, index) => (
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
}

export default Main;
