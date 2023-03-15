import React from 'react';
import CardHeader from './CardHeader';
import './Card.css'

const CardImage = (props) => {
    return (
        <React.Fragment>
            {/* <a href='#_'> */}
            <article className='product-card'>
                <div className='card-container'>
                    <span className='img-span'>
                        <img src={props.url} alt="Furniture" className='card-img' />
                    </span>
                </div>
                <CardHeader productName={props.productName} />
            </article>
            {/* </a> */}
        </React.Fragment>
    )

}

export default CardImage;