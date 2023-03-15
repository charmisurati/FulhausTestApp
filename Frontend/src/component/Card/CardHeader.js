import React, { useEffect } from 'react';
import './Card.css';
import { BsCartPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { AddItemToCart } from '../../store/actions/cartActions';

const CardHeader = (props) => {

    const dispatch = useDispatch();

    const product = {
        id: props.id,
        title: props.productName,
        quantity: 1,
        price: props.price
    }


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
                    <span>${props.price}</span>
                    <div>
                        <a className='CartIcon' id={props.id} onClick={() => dispatch(AddItemToCart(product))
                        }><BsCartPlus /></a>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default CardHeader;