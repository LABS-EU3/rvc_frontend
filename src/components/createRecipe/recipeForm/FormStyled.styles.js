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

export const ArrowDiv = styled.div`
margin-right: 298px;
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

export const ProgressBarDiv = styled.div`
height: 1rem;
background-color: #C4C4C4;
margin: 0 auto;
width: 80%;
margin-top:4px;
border-radius: 5px;
bottom: 15px;
.progress{
  background-color: #0AB28A;
  height: 10px;
  width: 17%;
  border-radius: 5px;
}
`;

export const Section1 = styled.div`
display:flex;
flex-direction:column;
background-color: #0AB28A;
height: 15rem;
width:100%;
box-shadow: 0px 8px 30px #DAD9D9;
margin-bottom:10px;
.check-icon {
  font-size: 40px;
  background: transparent;
  color: white;
}
.back-arrow {
  font-size: 40px;
  color: white;
}
`
export const Section3 = styled.div`
display:flex;
flex-direction:column;
background-color: #0AB28A;
height: 11rem;
width:100%;
box-shadow: 0px 8px 30px #DAD9D9;
margin-bottom:10px;

.check-icon {
  font-size: 40px;
  background: transparent;
  color: white;
}

.back-arrow {
  font-size: 40px;
  color: white;
}
`

export const SwitchDiv = styled.div`
font-size: 1.6rem;
display: flex;
flex-direction: column;
margin-bottom: 1.5rem;
justify-content: space-between; 
color: rgba(0, 0, 0, 0.51);
.switch-container {
  display: flex;
  p {
    margin-right: auto;
    color: black;
    font-weight: 300;
    font-size: 20px;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
`
export const StyledForm = styled.form`
display: flex;
flex-direction: column;
// margin-top: 4rem;
input {
  width: 80%;
  height: 4rem;
  &.category{
  }
}
.section2 {  
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 3rem;
  font-size: 1.4rem;
  label {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
  select {
    width: 80%;
    height: 40px;
    border-radius: 2rem;
  }
}
.section3 {
  font-size: 1.6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    width: 80%;
  }
  .options-paragraph   {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
}
`

export const NavigationSection1 = styled.div`
display:flex;
justify-content: space-between;
button:hover { 
  cursor: pointer
}
`



export const Addtitle = styled.div `
margin-left:5%;
margin-right:15%;
h1 {
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
}
`

export const Step = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`

export const Title = styled.h3 `
font-weight: 300;
font-size: 20px;
line-height: 18px;
margin-bottom: 15px;
margin-top:15px;
`

export const Section2 = styled.div `
display:flex;
flex-direction:column;
text-align: left;
margin:5%;
margin-bottom:65px;
margin-top:8px;
font-weight: 300;
font-size: 15px;
`

export const Section2b = styled.div `
display: flex;
flex-direction: column;
margin-top:15px;
margin-left:2%;
margin-right:2%;
h1 {
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  margin-bottom:10px;
}
.description-paragraph {
  font-size: 1.4rem;
  color: #c4c4c4;
}
`

export const ExportImg = styled.div `
width: 100%;
// height: 397px;
max-width: 100%;
max-height: 397px;
background: rgba(10, 178, 138, 0.21);
display:flex;
flex-direction: column;
align-items: center; 
justify-content: space-between;
margin-top: 3.5rem;

img {
  max-height: 397px;
  width: 100%;
}

input {
  margin-bottom: 3rem;
}

`

export const Title2 = styled.h1 `
font-style: normal;
font-weight: 300;
font-size: 35px;
line-height: 36px;
display: flex;
align-items: center;
margin-bottom: 15px;
margin-top:15px;
margin-left:5%;
`

export const AddItem = styled.div `
color: currentColor;
width: 100%;
border: 0;
height: 4.5rem;
margin-top:2%;
display: flex;
align-content:flex-start;
background: rgba(10, 179, 138, 0.08);
border-radius: 2px;
box-sizing: content-box;
input {
  font-size: 20px;
}
  p{
    font-size: 20px;
    padding-top: 6px;
    padding-left: 2rem;
  }`

  export const IngredientsDiv1 =styled.div`
  
  width: 20%;

  input, select {
    width: 100%;    
    height: 33px;
  }    

  }
  `
  export const IngredientsDiv =styled.div`
  
  .dropdown{
    height: 23px;

  }
  input, select {
    width: 100%;    
    height: 33px;
    background-color: white;
  }    

  }
  `
  export const IngredientsWrapper =styled.div`
    display:flex;
  `

  
  export const IngredientsMainDiv =styled.div`
  display:flex;
  margin-top:2%;
  margin-left:2%;
  margin-right:2%;
  // width:5rem;
  `


 