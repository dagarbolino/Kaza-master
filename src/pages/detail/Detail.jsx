import React from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import TitleDetail from '../../components/detail/title/TitleDetail';
import Carrousel from '../../components/detail/carrousel/Carrousel';
import TagRate from '../../components/detail/tagRate/TagRate';
import BlockCollapse from '../../components/detail/blockCollapse/BlockCollapse';
import NotFoundPage from '../error/NotFoundPage.jsx';

import { FetchData } from '../../service/FetchData';



function DetailPage() {

  const { id } = useParams();
  const data = FetchData().find((item) => item.id === id);

  if (!data) {
    return <NotFoundPage />;
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