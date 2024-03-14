import React from 'react';
import { Link } from 'react-router-dom';

import Card from "../../../utils/card/Card.jsx";


class Main extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  data: null,
            };
      }
      componentDidMount() {
            const apiURL = process.env.PUBLIC_URL + '/data.json';
            fetch(apiURL)
                  .then((response) => response.json())
                  .then((json) => {
                        this.setState({ data: json });
                  })
                  .catch((error) => {
                        console.error('Erreur lors de la récupération des données :', error);
                  });
      }
      render() {
            const { data } = this.state;
            
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
}
export default Main;