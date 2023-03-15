import React from 'react';
import CardHeader from './CardHeader';
import './Card.css'

const CardImage = (props) => {
    return (
        <React.Fragment>
            {/* <a href='#_'> */}
            <article className='product-card'>
                <div className='card-container' id={props.id}>
                    <span className='img-span'>
                        <img src={props.url} alt="Furniture" className='card-img' />
                    </span>
                </div>
                <CardHeader productName={props.productName} price={props.price} id={props.id} />
            </article>
            {/* </a> */}
        </React.Fragment>
    )

}

export default CardImage;