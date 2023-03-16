import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { CgClose } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { CART } from '../../store';
import { BsTrash } from 'react-icons/bs';
import '../../App.css';
import { DeleteItemToCart } from '../../store/actions/cartActions';


const Checkout = (props) => {

    const cart = useSelector((state) => state?.[CART]?.cart);
    const totalAmount = useSelector((state) => state?.[CART]?.totalAmount);
    const dispatch = useDispatch();
    const closeCart = () => {
        props.setVisible(false);
    }

    return (
        <React.Fragment>
            <div className="backdrop" onClick={closeCart}></div>
            <div className="conatiner">
                <div className='close'>
                    <a className='closeIcon' onClick={closeCart}><CgClose /></a>
                </div>
                <div>
                    <h2>My Orders</h2>
                    <div className='product-view-container'>
                        {
                            cart.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <div className='checkout-container'>
                                            <img src={v.imageURL} alt={v.imageURL} className="cart-img" />
                                            <div className='product-content'>
                                                <span className='product-title'>{v.title}</span>
                                                <div className='price-quantity'>
                                                    <p className='product-price'>${v.price}</p>
                                                    <p className='quantity'>{v.quantity}X</p>
                                                </div>
                                                <div className='deleteItem'>
                                                    <a className='deleteIcon' onClick={() => dispatch(DeleteItemToCart(v))}><BsTrash /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='total-amount'>
                                            <div>
                                                <p className='title-total'>Total</p>
                                                <p className='total-price'>${totalAmount}</p>
                                            </div>
                                        </div>
                                        <footer>
                                            <div>
                                                <button className='btn-checkout'>
                                                    Checkout
                                                </button>
                                            </div>
                                        </footer>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}


export default Checkout;