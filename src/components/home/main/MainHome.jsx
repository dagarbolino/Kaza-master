import React, { createContext } from 'react';

import { Link } from 'react-router-dom';
import Card from "../../../utils/card/Card.jsx";

import { FetchData } from '../../../service/FetchData';



export const DataContext = createContext();

export default function MainHome() {
      const data = FetchData();

      return (
            <DataContext.Provider value={data}>

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
                  
            </DataContext.Provider>
      );
}