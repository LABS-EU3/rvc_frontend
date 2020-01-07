import React from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import { CardDiv } from '../globals/card-styles';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import arrow from "../images/left-arrow.png";

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
                
                </ImgRecipe>
            <h1> Individual recipe </h1>
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
