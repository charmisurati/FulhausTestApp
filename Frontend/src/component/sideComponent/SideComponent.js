import React from 'react';

import '../../App.css';
import './SideComponent.css';

const SideComponent = (props) => {

    return (
        <React.Fragment>
            <div className='side-component'>
                <div className='image'>
                    <img src={props.data} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideComponent;