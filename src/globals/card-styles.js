import styled from "styled-components";

export const Home = styled.div`
background-color: white;
margin-top: 15%;
`
export const WelcomeDiv = styled.div`
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
    // background: white;      
    
  }
}

.slogan {
  h3{
    font-size: 2.4rem;
  }
}
`