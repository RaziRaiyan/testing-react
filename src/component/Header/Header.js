import React from 'react';
import './Header.scss';
import logo from '../../assets/apple.png';

const Header = () => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="Apple Logo"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
