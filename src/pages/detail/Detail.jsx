import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


import FetchDataDetail from '../../service/FetchData.jsx';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import TitleDetail from '../../components/detail/title/TitleDetail';
import Carrousel from '../../components/detail/carrousel/Carrousel';
import TagRate from '../../components/detail/tagRate/TagRate';
import BlockCollapse from '../../components/detail/blockCollapse/BlockCollapse';
import NotFoundPage from '../error/NotFoundPage.jsx';

function DetailPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  if (!data) {
    return (
      <FetchDataDetail render={(fetchedData) => {
        const item = fetchedData.find((item) => item.id === id);
        if (!item) {
          return <NotFoundPage />;
        }
        setData(item);
        return <div>Chargement en cours...</div>;
      }} />
    );
  }

  return (
    <>
      <NavBar />
      <div className="detailMain">
        <Carrousel data={data} />
        <div className="detail-title">
          <div className="titleTags">
            <TitleDetail data={data} />
            <TagRate data={data} />
          </div>
        </div>
        <BlockCollapse data={data} />
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
