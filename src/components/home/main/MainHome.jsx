import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import Card from "../../../utils/card/Card.jsx";
import FetchData from '../../../service/FetchData.jsx';



export const DataContext = createContext();


class Main extends React.Component {
      render() {
            return (
                  <div className="mainHome">
                        <FetchData render={(data) => (
                              
                              <DataContext.Provider value={data}>
                                    {data.map((item) => (
                                          <Link key={item.id} to={`/detail/${item.id}`}>
                                                <Card
                                                      title={item.title}
                                                      imageUrl={item.cover}
                                                      description={item.description}
                                                />
                                          </Link>
                                    ))}
                              </DataContext.Provider>
                        )} />
                  </div>
            );
      }
}



export default Main;


