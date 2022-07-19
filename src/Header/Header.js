import React from 'react';
import './Header.css';
import Logo from '../images/logo.svg';

function Header() {
    return(
        <header id='header'>
            <img src={Logo} alt='logo'/>
            <p className='header--title'>Travel journey</p>
        </header>
    );
}

export default Header;