import React from 'react'

import Collapse from '../../../../components/function/collapse/CollapseFunction';
import { useParams } from 'react-router-dom';
import { locLists } from '../../../../datas/locLists.js';

function BlockCollapse() {

  const { id } = useParams();
  const selectedData = locLists.find(data => data.id === id);

  if (!selectedData) {
    return <div>Carte introuvable</div>;
  }

  return (


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

  )
}

export default BlockCollapse
