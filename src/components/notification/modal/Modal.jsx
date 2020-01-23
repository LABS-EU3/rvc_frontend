import React from 'react'
import { StyledDiv } from './Modal.styles'; 
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

export function Modal(props) {
  const { isNotification, message, buttonLink, isDisplaying, dismissModal } = props;
  
  return (
    <StyledDiv style={{display: isDisplaying ? "inherit" : "none"}}>
        <div className="message">
          <h2>{message}</h2>
        </div>
        <div className="buttons">
          {
            isNotification
              ? 
                <>
                  <div className="button-div" id="view" onClick={dismissModal}>
                    <Link to={buttonLink}>View</Link>
                  </div>
                  <div className="button-div" id="continue" onClick={dismissModal}>Continue</div>
                </>
              :
                <div className="button-div" id="redirect" onClick={dismissModal}>
                  <Link to={buttonLink}>Redirect</Link>
                </div>
          }
        </div>
    </StyledDiv>
  )
}

export default connect(state => state.modal, actionCreators)(Modal);
