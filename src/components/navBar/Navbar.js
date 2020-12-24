import React from 'react';
import Logo from '../../assets/images/logo.PNG';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessengerIcon from '@material-ui/icons/MessageOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Avatar from "@material-ui/core/Avatar";
import ProfilePic from '../../assets/images/profilePic.jpg';
import { makeStyles } from "@material-ui/core/styles";

const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));

      const classes = useStyles();

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
                    <Avatar alt="profile" src={ProfilePic} className="icon" className={classes.small}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;