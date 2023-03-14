import React from 'react'
import './Header.css';
import '../../App.css';
import { BsCartPlus } from 'react-icons/bs';

const Header = () => {

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
                                <a className='CartIcon'><BsCartPlus /></a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Header;