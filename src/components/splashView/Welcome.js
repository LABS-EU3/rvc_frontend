import React from 'react';
import logo_image from '../globals/design-elements/logo_white.png';
import { WelcomeDiv } from '../../globals/card-styles';



function Welcome (){
    return (
        <WelcomeDiv>
            <div className='title'>
              <h1>FORKBOOK</h1>
            </div>
            <div className="logo-container">
              <img src={logo_image} alt="welcome" />
            </div>
            <div className='slogan'>
              <h3>expand your taste</h3>
            </div>
        </WelcomeDiv>
    );
}

export default Welcome