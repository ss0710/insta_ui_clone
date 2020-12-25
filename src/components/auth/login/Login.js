import React from 'react';
import Phone from '../../../assets/images/phone.PNG';
import InstagramLogo from '../../../assets/images/instagramLogo.PNG';
import InputTextField from '../../shared/text-field/InputTextField';
import ClickButton from '../../shared/button/Button';
import AppStore from '../../../assets/images/AppStore.png';
import GooglePlay from '../../../assets/images/GooglePlay.png';
import Links from '../../shared/links/Links';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';

const Login  = () => {
    return(
        <div className="login-div">
            <div className="login-container">

                 <div className="container-child">
                    <img className="login-phone" width={380} height={600} src={Phone} alt="login-img"/>
                 </div>

                 <div className="container-child">

                    <div className="form-div">
                    <img width={280} height={70} src={InstagramLogo} alt="instagram-logo"/>
                    <InputTextField type={'text'} placeholder={'username'} />
                    <InputTextField type={'password'} placeholder={'Password'} />
                    <Link to="/Home" style={{ textDecoration: 'none' }}><ClickButton text={'Log In'}/></Link>
                    <p>OR</p>
                    <div className="Login-Links">
                    <h4><FacebookIcon className="facebook-icon"/>Log in with Facebook</h4>
                    <h5>Forgotten Passsword?</h5>
                    </div>
                    </div>

                    <div className="signup-link-div">
                    <p>Don't have an account? <Link to="/Signup" style={{ textDecoration: 'none' }}> Sign up </Link></p>
                    </div>

                    <div className="App-link-div">
                    <p>Get the app.</p>
                    <img height={40} width={135} src={AppStore} alt="App Store" /><img height={40} width={135} src={GooglePlay} alt="Google Play" />
                    </div>

                 </div>

            </div>

            <Links/>

        </div>
    );
}

export default Login;