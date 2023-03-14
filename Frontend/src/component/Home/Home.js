import React from 'react';
import SideComponent from '../sideComponent/SideComponent';
import '../../App.css';
import './Home.css';

const Home = (props) => {

    return (
        <React.Fragment>
            <div className='flex flex-1 bg-gray' >
                <SideComponent Data={props.Data.products} />
            </div>
        </React.Fragment>
    )

}

export default Home;