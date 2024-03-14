import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../../../service/FetchData.jsx';
import Card from "../../../utils/card/Card.jsx";

export class Main extends React.Component {

  render() {
    return (
      (<FetchData />


        ,


        <div className="mainHome">
          {data.map((item, index) => (
            <Link key={index} to={`/detail/${item.id}`}>
              <Card
                title={item.title}
                imageUrl={item.cover}
                description={item.description} />
            </Link>
          ))}
        </div>)

      /  >
        );
  }
}
