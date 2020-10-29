import React from 'react';
import './Header.scss';
import logo from '../../assets/apple.png';

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={logo} alt="Apple Logo"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
