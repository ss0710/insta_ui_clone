import React from 'react';
import Phone from '../../../assets/images/phone.PNG';
import InstagramLogo from '../../../assets/images/instagramLogo.PNG';
import InputTextField from '../../shared/text-field/InputTextField';
import ClickButton from '../../shared/button/Button';

const Login  = () => {
    return(
        <div className="login-div">
            <div className="login-container">

                 <div className="container-child">
                    <img width={380} height={600} src={Phone} alt="login-img"/>
                 </div>

                 <div className="container-child">

                    <div className="form-div">
                    <img width={280} height={70} src={InstagramLogo} alt="instagram-logo"/>
                    <InputTextField type={'text'} placeholder={'username'} />
                    <InputTextField type={'password'} placeholder={'Password'} />
                    <ClickButton text={'Log In'}/>
                    <p>OR</p>
                    <div className="Login-Links">
                    <h4>Log in with Facebook</h4>
                    <h5>Forgotten Passsword?</h5>
                    </div>
                    </div>

                    <div className="signup-link-div">
                    <h4>Don't have an account? Sign up</h4>
                    </div>

                    <div>
                    <p>Get the app.</p>
                    <button>App Store</button><button>Google Play</button>
                    </div>

                 </div>

            </div>
        </div>
    );
}

export default Login;