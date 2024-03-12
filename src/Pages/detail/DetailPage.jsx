
import React from 'react';
import { Outlet } from 'react-router-dom';


import NavBar from '../../sass/libs/scenes/navBar/components/NavBar';
import Carrousel from '../../sass/libs/scenes/detail/components/carrousel/Carrousel';
import TitleDetail from '../../sass/libs/scenes/detail/components/title/TitleDetail';
import TagRate from '../../sass/libs/scenes/detail/components/tagRate/TagRate';
import BlockCollapse from '../../sass/libs/scenes/detail/components/blockCollapse/BlockCollapse';
import Footer from '../../sass/libs/scenes/footer/components/Footer';


export default function DetailPage() {





  return (
    <>
<div>
  <div>
        <NavBar />
        <div className="detailMain">
          <div className="detailTitle">

          </div>
          <Carrousel />
          <div className="titleTags">
            <TitleDetail />
            <TagRate />
          </div>
          <BlockCollapse />
        </div>
        <Footer />

</div>
<Outlet />
</div>
    </>
  )
}

