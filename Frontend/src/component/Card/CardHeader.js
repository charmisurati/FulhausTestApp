import React from 'react';
import './Card.css';
import { BsCartPlus } from 'react-icons/bs';

const cardHeader = (props) => {

    return (
        <React.Fragment>
            <header>
                <div>
                    <span className='product-name'>{props.productName}</span>
                </div>
                <div>
                    <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
                <div className='card-price'>
                    <span>$250</span>
                    <div>
                        <a className='CartIcon'><BsCartPlus /></a>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default cardHeader;