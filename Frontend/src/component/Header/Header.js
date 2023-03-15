import React, { useState } from 'react'
import './Header.css';
import '../../App.css';
import { BsCartPlus } from 'react-icons/bs';
import Checkout from '../Checkout/Checkout';

const Header = (props) => {


    const openCart = () => {
        props.setVisible(true);

    }
    return (
        <React.Fragment>
            <div>
                <header className='headerMain'>
                    <div className='fixed flex w-full z-50 header'>
                        <ul className='header-list flex'>
                            <li className='flex'>
                                <a>User Name</a>
                            </li>
                            <li className='flex'>
                                <a className='CartIcon' onClick={openCart}><BsCartPlus /></a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Header;