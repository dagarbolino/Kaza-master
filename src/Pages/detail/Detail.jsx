import React from 'react';

import Carrousel from '../../scenes/detail/components/carrousel/Carrousel';
import Footer from '../../scenes/footer/components/Footer';

import BlockCollapse from '../../scenes/detail/components/blockCollapse/BlockCollapse';
import TagRate from '../../scenes/detail/components/tagRate/TagRate';
import TitleDetail from '../../scenes/detail/components/title/TitleDetail';


export default function DetailPage() {



  return (
    <>

      <div className="detailMain">

        <Carrousel />

        <TitleDetail />

        <TagRate />

        <BlockCollapse />

      </div>

      < Footer />

    </>
  )
}
