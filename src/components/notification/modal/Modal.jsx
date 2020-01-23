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
          <p>{message}</p>
        </div>
        <div className="buttons">
          {
            isNotification
              ? 
                <>
                  <div className="button-div" id="view" onClick={dismissModal}>
                    <Link to={buttonLink}>VIEW</Link>
                  </div>
                  <div className="button-div" id="continue" onClick={dismissModal}>CONTINUE</div>
                </>
              :
                <div className="button-div" id="redirect" onClick={dismissModal}>
                  <Link to={buttonLink}>REDIRECT</Link>
                </div>
          }
        </div>
    </StyledDiv>
  )
}

export default connect(state => state.modal, actionCreators)(Modal);
