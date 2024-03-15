import React from 'react';
import { DataContext } from '../../home/main/MainHome.jsx';

import Collapse from "../../../utils/collapse/CollapseFunction.jsx";




class BlockCollapse extends React.Component {


    render() {

        const { id } = this.props;


        return (


            <div className="blockCollapse">
                <DataContext.Consumer>
                {data => {
                    const item = data.find(item => item.id === id);

                    if (!item) {
                        return null;
                    }


                    return (
                        <div key={item.id}>
                            <div className='descrip'>
                                <Collapse title="Description">
                                    <p>{item.description}</p>
                                </Collapse>
                            </div>

                            
                            <div className='equip'>
                                <Collapse title="Equipements">
                                    <ul>
                                        {item.equipments.map((equip, index) => (
                                            <li key={index}>{equip}</li>
                                        ))}
                                    </ul>
                                </Collapse>
                            </div>
                        </div>
                    );
                }}
                </DataContext.Consumer>
            </div>
        );
    }
}

export default BlockCollapse;
