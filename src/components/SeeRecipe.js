import React from 'react';
import '../App.css';
import Footer from './Footer';
import { CardDiv } from '../globals/card-styles';
import styled from "styled-components";
import arrow from "../images/left-arrow.png";
import dishImg from "../images/dish1.jpg";
import profile from "../images/profile.jpeg";
import Popup from "reactjs-popup";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";

function SeeRecipe (){
    return (
        <div>
            <RecipeTopDiv>
                <div>
                    <img src={arrow} alt="arrow" />
                </div>
                <TopButtonDiv>
                    <ShareButton>Share</ShareButton>
                    <ForkButton>Fork</ForkButton>
                </TopButtonDiv>
            </RecipeTopDiv>
            <CardDiv>
                <ImgRecipe>
                    <img src={dishImg} alt="dishImg" />
                </ImgRecipe>
                <DescriptionDiv>
                    <ProfilePicture>
                        <img src={profile} alt="profile" />
                    </ProfilePicture>
                    <DetailsRecipe>

                    </DetailsRecipe>
                </DescriptionDiv>
                <BottomButtonDiv>
                    <Popup modal trigger={
                    <LgButton>Ingredients</LgButton>}>
                        {close => <IngredientList close={close} />}
                    </Popup>
                    <Popup modal trigger={
                    <LgButton>Instructions</LgButton>}>
                        {close => <InstructionList close={close} />}
                    </Popup>
                </BottomButtonDiv>
            </CardDiv>
            <Footer/>
            </div>
    )
}

export default SeeRecipe

export const RecipeTopDiv = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 5%;
`

export const TopButtonDiv = styled.div`
    display:flex;
    justify-content: space-around;
    width: 200px;
    text-align: center;
    font-size: 16px;

`

export const ForkButton = styled.div`
    width: 90px;
    height: 35px;
    background: rgba(255, 48, 100, 0.8);
    border-radius: 5px;
`
export const ShareButton = styled.div`
    width: 90px;
    height: 35px;
    background: rgba(182, 182, 182, 0.6);
    border-radius: 5px;
`
export const ImgRecipe = styled.div`
width: 100%;
height: 372px;

overflow: hidden;
margin-top:-10%;
margin-bottom:2%;
img{
    object-fit: scale-down;
}
`
export const DescriptionDiv = styled.div`
display:flex;
justify-content: space-between;
margin:5%;
`

export const DetailsRecipe = styled.div`
background: rgba(196, 196, 196, 0.12);
border-radius: 15px;
text-align: start;
width: 75%;

`
export const ProfilePicture = styled.div`
border-radius: 50px;
width: 53px;
height: 55px;
object-fit: scale-down;
overflow: hidden;
`

export const BottomButtonDiv = styled.div`
display: flex;
flex-direction: column;
margin:5%;
`
export const LgButton = styled.div`
height: 41px;
margin:2%;
font-weight: bold;
font-size: 24px;
line-height: 33px;
text-align: center;
background: rgba(10, 179, 138, 0.74);
border-radius: 9px;
color:white;
`



