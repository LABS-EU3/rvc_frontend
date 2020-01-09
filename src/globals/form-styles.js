import styled from "styled-components";

export const SeeRecipePopup = styled.div`
h1 {
  font-family: Antic;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-bottom:10%;
}

h2 {
  margin-bottom: 7%;
  background: rgba(10,179,138,0.08);
  height: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 33px;
  // text-align: left;
}
` 

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: 739px;
text-aign:center;
font-family: Avenir Next;
justify-content: space-evenly; 
`

export const Logo = styled.div`
img {
  width: 50%;
}
`

export const H1 =styled.h1`
  font-size: 36px;
  margin-top: -18px;
  margin-bottom: 0;
  margin-left:10%;
  margin-right:10%;
`

export const DescriptionForm = styled.h3`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
text-align: center;
margin-left:20%;
margin-right:20%;
margin-top: 0;
`

export const ButtonDiv = styled.div`
width: 100%;
`


export const ButtonForm = styled.div`
width: 100%;
background-color: #0AB38A;
border: 0;
border-radius: 28px;
display: table-cell;
vertical-align: middle;
font-weight: bold;
font-size: 24px;
line-height: 29px;
text-align: center;
vertical-align: middle;
color: #FFFFFF;
height: 56px;
margin: 20%;
outline: none !important;
overflow: hidden;
transition: box-shadow 150ms;
`

export const Input = styled.input`
    display:block;
    height:50px;
    margin:0 auto;
    border:none;
    &::placeholder{
      -webkit-transform:translateY(0px);
        transform:translateY(0px);
      -webkit-transition:.5s;
        transition:.5s;
    }
    &:hover,
    &:focus,
    &:active:focus{
      color:#E71536;
      outline:none;
      border-bottom:1px solid #E71536;
      &::placeholder{
        color:#E71536;
        position:relative;
        -webkit-transform:translateY(-20px);
        transform:translateY(-20px);
        
      }
    }
`

export const FooterDiv = styled.div`
bottom: 2%;
font-size: 18px;
`;

export const LinkFooter = styled.p`
color: #0AB28A;
outline: none;
text-decoration: none;
list-style: none;
font-weight: bold;
display: inline;
`;

export const RegLink = styled.span`
text-decoration: none;
`;



