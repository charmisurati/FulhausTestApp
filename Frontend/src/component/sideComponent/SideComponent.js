import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import './SideComponent.css';

const SideComponent = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
            .then(response => {
                console.log(response.data.data.products[4].imageURLs[0])
                setData(response.data.data.products[4].imageURLs[0])
            })
    })

    return (
        <React.Fragment>
            <div className='block side-component'>
                <div className='image'>
                    <img src={data} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideComponent;