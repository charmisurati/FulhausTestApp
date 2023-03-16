import React, { useEffect, useState } from "react";
import CardImage from "./CardImage";
import './Card.css';

const Card = (props) => {

    const [totalProducts, setTotalProducts] = useState([]);
    useEffect(() => {
        setTotalProducts(props.totalProducts);
    })
    return (
        <React.Fragment>
            <div className='w-full card'>
                <div className='grid'>
                    {
                        totalProducts.map((v, index) => {
                            return <CardImage url={v.imageUrls[0]} key={index} productName={v.productName} price={v.retailPrice} id={v._id} />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )

}

export default Card;