import React from 'react';
import Collapse from "../../../utils/collapse/CollapseFunction.jsx";




function BlockCollapse({ data }) {
    return (
    
            <div className='blockCollapse' key={data.id}>
                <div className='descrip'>
                    <Collapse title="Description">
                        <p>{data.description}</p>
                    </Collapse>
                </div>
                <div className='equip'>
                    <Collapse title="Equipements">
                        <ul>
                            {data.equipments.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>


    );
}



export default BlockCollapse;

















