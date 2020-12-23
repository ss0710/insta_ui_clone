import React from 'react';
import Logo from '../../assets/images/logo.PNG';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div>
                    <img width={125} height={45} src={Logo} alt="logo"/>
                </div>
                <div>
                    searchbar
                </div>
                <div>
                    icon
                </div>
            </div>
        </div>
    );
}

export default Navbar;