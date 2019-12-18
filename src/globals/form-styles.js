import styled from "styled-components";


export const MainDiv = styled.div`
display: flex;
flex-direction: column;
width: 411px;
height: 739px;
margin-right: 20%;
margin-left: 20%;
margin-top: 10%;
border: 1px red solid;
text-aign:center;
font-family: Avenir Next;
justify-content: space-evenly; 
`

export const Logo = styled.div`
display:flex;
width: 210px;
height: 210px;
align-item:center;
margin-left:20%;
margin-right:20%;
`

export const H1 =styled.h1`
  font-size: 36px;
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
`

export const ButtonDiv = styled.div`
margin-left:20%;
margin-right:15%;
`


export const ButtonForm = styled.div`
width: 305px;
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
    width:90%;
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
`;



