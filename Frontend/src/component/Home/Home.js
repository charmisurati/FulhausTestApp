import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideComponent from '../sideComponent/SideComponent';
import '../../App.css';
import './Home.css';
import Card from '../Card/Card';
import CardImage from '../Card/CardImage';

const Home = () => {

    const [data, setData] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
            .then(response => {
                //console.log(response.data.data.products)
                setData(response.data.data.products[0].imageURLs[0])
                setTotalProducts(response.data.data.products)
            })
    }, [])

 
    return (
        <React.Fragment>
            <div className='flex flex-1 bg-gray' >
                <SideComponent data={data} />

                <Card totalProducts={totalProducts} />
            </div>


        </React.Fragment>
    )

}

export default Home;