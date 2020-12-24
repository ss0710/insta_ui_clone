import React from 'react';
import Suggestions from './Suggestions';
import Avatar from "@material-ui/core/Avatar"; 
import { makeStyles } from "@material-ui/core/styles";
import Profilepic from '../../assets/images/profilePic.jpg';

const Profile = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));

      const classes = useStyles();

    return(
        <div className="profile-div">
            <div className="profile-container">

                <div className="profile-name">
                <Avatar alt="profile" src={Profilepic} className={classes.large}/>
                <div>
                <p className="username">mr._mister1007</p>
                <p className="full-name">Sudheer Singh</p>
                </div>
                </div>

                <div className="links">
                <p className="switch-link">Switch</p>
                </div>

            </div>
            
            <div className="suggestions-div">

                <div className="suggestions">
                 <Suggestions/>
                </div>

            </div>
        </div>
    );
}

export default Profile;