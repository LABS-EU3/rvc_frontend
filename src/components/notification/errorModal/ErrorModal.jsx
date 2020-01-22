import React from 'react'
import { StyledDiv } from './ErrorModal.styles'; 

export default function ErrorModal(props) {
  const { message } = props;

    return (
        <StyledDiv>
            <h2>{message}</h2>
        </StyledDiv>
    )
}
