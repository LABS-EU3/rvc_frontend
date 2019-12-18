import React from 'react';
import styles from 'styled-components'
import logo_image from '../images/forkbook.png'

const Div = styles.div`
background: #0AB38A;
color: white;
display: flex;
flex-direction: column;
height: 100vh;
justify-content: space-evenly;
align-items: center;

.title {
  h1 {
    font-size: 4rem;
  }
}
.logo-container {
   
  img {
    width: 50%;
    background: white;      
    
  }
}

.slogan {
  h3{
    font-size: 2.4rem;
  }
}
`

function Welcome (){
    return (
        <Div>
            <div className='title'>
              <h1>FORKBOOK</h1>
            </div>
            <div className="logo-container">
              <img src={logo_image} />
            </div>
            <div className='slogan'>
              <h3>expand your taste</h3>
            </div>
        </Div>
    );
}

export default Welcome