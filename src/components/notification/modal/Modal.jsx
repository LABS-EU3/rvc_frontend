import React from 'react'
import { StyledDiv } from './Modal.styles'; 
import { Redirect } from "react-redux";

import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

export function Modal(props) {
  const { message, displaying } = props;



  return (
    <StyledDiv style={{display: displaying ? "inherit" : "none"}}>
        <div className="message">
          <h2>{message}</h2>
        </div>
        <div className="buttons">
          <button id="view">

          </button>
          <button id="continue">

          </button>
          <button id="redirect">
            
          </button>
        </div>
    </StyledDiv>
  )
}

export default connect(state => state.error, actionCreators)(Modal);
