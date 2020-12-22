import React from 'react';
import Phone from '../../../assets/images/phone.PNG';
import InstagramLogo from '../../../assets/images/instagramLogo.PNG';

const Login  = () => {
    return(
        <div className="login-div">
            <div className="login-container">
                 <div className="container-one">
                    <img width={380} height={600} src={Phone} alt="login-img"/>
                 </div>
                 <div className="container-two">
                    <div className="form-div">
                    <img src={InstagramLogo} alt="instagram-logo"/>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Login;