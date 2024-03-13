import React from 'react';
import { Link, } from 'react-router-dom';
//import { locLists } from '../../../../../../../public/data.js';
import { locLists } from '../../../dataLoc/localeLists.js';
import UseFetchData from '../../../service/FetchData.jsx';

import Card from "../../../utils/card/Card.jsx";


function Main() {
      const apiURL = '#';

      const data = UseFetchData({ apiURL, localData: locLists });

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
}

export default Main;
