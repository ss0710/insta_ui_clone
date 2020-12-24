import React from 'react';
import Logo from '../../assets/images/logo.PNG';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessengerIcon from '@material-ui/icons/MessageOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div>
                    <img width={135} height={45} src={Logo} alt="logo"/>
                </div>
                <div>
                    <input type="text" placeholder="search" />
                </div>
                <div className="icons">
                    <HomeIcon className="icon"/>
                    <MessengerIcon className="icon"/>
                    <ExploreIcon className="icon"/>
                    <FavoriteBorder className="icon"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;