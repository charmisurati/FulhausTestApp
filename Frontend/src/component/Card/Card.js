import React, { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
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
                            return <CardImage url={v.imageURLs[index]} key={index} productName={v.fulhausProductName} price={v.retailPrice} />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )

}

export default Card;