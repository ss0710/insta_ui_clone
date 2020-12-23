import React from 'react';
import InstagramLogo from '../../../assets/images/instagramLogo.PNG';
import ClickButton from '../../shared/button/Button';
import InputTextField from '../../shared/text-field/InputTextField';
import AppStore from '../../../assets/images/AppStore.png';
import GooglePlay from '../../../assets/images/GooglePlay.png';
import Links from '../../shared/links/Links';

const Signup  = () => {
    return(
        <div className="signup-div">

            <div className="form-div">
            <img width={280} height={70} src={InstagramLogo} alt="instagram-logo"/>
            <p>Sign up to see photos and videos from your friends.</p>
            <ClickButton text={'Log in with Facebook'} />
            <p className="or-line">OR</p>

            
            <InputTextField type={'email'} placeholder={'Email'}/>
            <InputTextField type={'text'} placeholder={'Full Name'}/>
            <InputTextField type={'text'} placeholder={'User Name'}/>
            <InputTextField type={'password'} placeholder={'Password'}/>
            <ClickButton text={'Sign up'} />
            

            <div className="Policy-div">
            <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
            </div>
            </div>

            <div className="login-link-div">
            <p>Have an account? Log in</p>
            </div>

            <div className="App-link-div">
            <p>Get the app.</p>
            <img height={40} width={135} src={AppStore} alt="App Store" /><img height={40} width={135} src={GooglePlay} alt="Google Play" />
            </div>

            <Links />

        </div>
    );
}

export default Signup;