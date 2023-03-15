import React, { useEffect, useState } from 'react';
import SideComponent from '../sideComponent/SideComponent';
import '../../App.css';
import './Home.css';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartData } from '../../store/actions/productActions';
import { PRODUCT } from '../../store';

const Home = () => {
    const products = useSelector((state) => state?.[PRODUCT]?.products);
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        if (products.length > 0) setVisible(true)
        else setVisible(false)
    })


    useEffect(() => {
        dispatch(GetCartData());

    }, [dispatch])

    return (
        <React.Fragment>
            <div className='flex flex-1 bg-gray' >

                {
                    visible === true && <SideComponent products={products[0].imageURLs[0]} />
                }

                <Card totalProducts={products} />


            </div>
        </React.Fragment>
    )
}

export default Home;