import React from 'react'
import { StyledDiv } from './ErrorModal.styles'; 

import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

export function ErrorModal(props) {
  const { message, displaying } = props;

    return (
        <StyledDiv style={{display: displaying ? "inherit" : "none"}}>
            <h2>{message}</h2>
        </StyledDiv>
    )
}

export default connect(state => state.error, actionCreators)(ErrorModal);
