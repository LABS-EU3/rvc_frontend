import React from 'react';
import styles from 'styled-components'

const Div = styles.div`
background: green;
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png" />
            </div>
            <div className='slogan'>
              <h3>expand your taste</h3>
            </div>
        </Div>
    );
}

export default Welcome