import React from 'react';


import NavBar from '../../components/navBar/NavBar';
import Carrousel from '../../components/detail/carrousel/Carrousel';
import TitleDetail from '../../components/detail/title/TitleDetail';
import TagRate from '../../components/detail/tagRate/TagRate';
import BlockCollapse from '../../components/detail/blockCollapse/BlockCollapse';
import Footer from '../../components/footer/Footer';


import { DataContext } from '../../components/home/main/MainHome';



export default function DetailPage(props) {
  return (


    <DataContext.Consumer>

      {data => (

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


                <BlockCollapse match={props.match} data={data} />



              </div>
              <Footer />
            </div>
          </div>
          
        </>
      )}


    </DataContext.Consumer>


  )
}


