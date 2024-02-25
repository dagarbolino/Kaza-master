import { Link } from 'react-router-dom';

import Card from "./components/card/Card";
import { locLists } from "../../../../datas/locLists";

const Main = () => {

      const sixDatas = locLists.slice(0, 6);

      return (
            <>
                  <div className="mainHome">
                        {sixDatas.map((data) => (
                              <Link key={data.id} to={`/detail/${data.id}`}>
                                    <Card
                                          title={data.title}
                                          imageUrl={data.cover}
                                          description={data.description}
                                    />
                              </Link>
                        ))}
                  </div>
            </>
      )
}

export default Main
