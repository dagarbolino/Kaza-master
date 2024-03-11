import React from 'react';

import Carrousel from '../../sass/libs/scenes/detail/components/carrousel/Carrousel';



import Footer from '../../sass/libs/scenes/footer/components/Footer';

import BlockCollapse from '../../sass/libs/scenes/detail/components/blockCollapse/BlockCollapse';
import TagRate from '../../sass/libs/scenes/detail/components/tagRate/TagRate';


import TitleDetail from '../../sass/libs/scenes/detail/components/title/TitleDetail';



export default function DetailPage() {



  return (
    <>

      <div className="detailMain">

        <Carrousel />

        <div className="titleTags">
          <TitleDetail />
          <TagRate />
        </div>

        <BlockCollapse />

      </div>

      < Footer />

    </>
  )
}
