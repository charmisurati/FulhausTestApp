import React from 'react';
import './Checkout.css';
import { CgClose } from 'react-icons/cg';

const checkout = (props) => {

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
                </div>
            </div>
        </React.Fragment>
    )
}


export default checkout;