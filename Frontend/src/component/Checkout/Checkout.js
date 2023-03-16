import React from 'react';
import './Checkout.css';
import { CgClose } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { CART } from '../../store';

const Checkout = (props) => {

    const cart = useSelector((state) => state?.[CART]?.cart);
    console.log(cart);

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
                                {/* console.log("v", v); */ }
                                return (
                                    <div>
                                        <div className='product-view-card'>
                                            <div className='product-position'>
                                                <span>
                                                    <img src={v.imageURL} alt={v.imageURL} className="cart-img" />
                                                </span>
                                            </div>
                                            <div>
                                                <span>{v.title}</span>
                                            </div>
                                        </div>
                                        <div className='price-quantity'>
                                            <p>${v.price}</p>
                                            <span>{v.quantity}</span>
                                        </div>
                                    </div>)
                            })
                        }

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}


export default Checkout;