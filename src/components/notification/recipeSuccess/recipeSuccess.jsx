import React from 'react'
import { StyledDiv } from './recipeSuccess.styles'; 

export default function recipeSuccess() {
    return (
        <StyledDiv>
            <p>The edited recipe has been added to your cookbook</p>
            <button className="view-btn">VIEW</button>
            <button className="continue-btn">CONTINUE</button>            
        </StyledDiv>
    )
}
