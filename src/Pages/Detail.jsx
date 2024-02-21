import React from 'react';
import { useParams } from 'react-router-dom';
import { locLists } from '../datas/locLists';

import Collapse from '../components/function/Collapse';
import Ratting from '../components/function/Ratting';

import Footer from '../components/Ui/Footer';
import Carrousel from '../components/function/Carrousel';


export default function DetailPage() {

  const { id } = useParams();
  const selectedData = locLists.find(data => data.id === id);

  if (!selectedData) {
    return <div>Carte introuvable</div>;
  }

  return (
    <>

      <div className="detailContainer">

        <Carrousel />

        <div className="detail-title">
          <div className="title">
            <h2>{selectedData.title}</h2>
            <p>{selectedData.location}</p>
          </div>
          <div className="host">
            <p>{selectedData.host.name}</p>
            <img src={selectedData.host.picture} alt={selectedData.host.name} />
          </div>
        </div>

        <div className="tag_rate">
          <div className="tags">

            {selectedData.tags.map((tag, index) => (
              <button className='tag' key={index}>{tag}</button>
            ))}

          </div>
          <Ratting initialValue={selectedData.rating} />
        </div>

        <div className='blockCollapse'>

          <div className='descrip'>
            <Collapse title="Description">
              <p>{selectedData.description}</p>
            </Collapse>
          </div>

          <div className='equip'>
            <Collapse title="Equipements">
              <ul>
                {selectedData.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </Collapse>
          </div>

        </div>

      </div>


      < Footer />

    </>
  )
}
