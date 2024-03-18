

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import TitleDetail from '../../components/detail/title/TitleDetail';
import Carrousel from '../../components/detail/carrousel/Carrousel';
import TagRate from '../../components/detail/tagRate/TagRate';
import BlockCollapse from '../../components/detail/blockCollapse/BlockCollapse';
import FetchData from '../../service/FetchData.jsx';

function DetailPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  if (!data) {
    return (
      <FetchData render={(fetchedData) => {
        const item = fetchedData.find((item) => item.id === id);
        setData(item);
        return <div>Chargement en cours...</div>;
      }} />
    );
  }

  return (


    <>

 
        <div>
          <NavBar />
          <div className="detailMain">
            <div className="detailTitle">

            </div>
            <Carrousel data={data} />
            <div className="titleTags">
              <TitleDetail data={data} />
              <TagRate data={data} />
            </div>


            <BlockCollapse data={data} />



          </div>
          <Footer />
        </div>
    


    </>
  );
}

export default DetailPage;