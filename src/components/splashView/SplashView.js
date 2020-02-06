import React from 'react';

import logo_image from '../../globals/design-elements/logo_white.png';
import { SplashViewDiv } from './Splash.styles'

function SplashView (){
    return (
        <SplashViewDiv>
            <div className='title'>
              <h1>FORKBOOK</h1>
            </div>
            <div className="logo-container">
              <img src={logo_image} alt="forkbook-logo" />
            </div>
            <div className='slogan'>
              <h3>Find. Fork. Fix up!</h3>
            </div>
        </SplashViewDiv>
    );
}

export default SplashView;