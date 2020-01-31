import React from 'react'
import { StyledDiv } from './Modal.styles'; 
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

export function Modal(props) {
  const { isNotification, message, buttonLink, isDisplaying, dismissModal } = props;
  
  // const { displayNotificationModal, displayErrorModal } = props;
  // ^For testing purposes!

  return (<>
    <StyledDiv style={{display: isDisplaying ? "inherit" : "none"}}>
      <div className="modal">
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
      </div>
    </StyledDiv>

    {/* For testing purposes! */}
    {/* <button onClick={() => displayNotificationModal("The thing worked!", "/profile")} style={{position: "absolute", top: "50%"}}>NOTIF</button>
    <button onClick={() => displayErrorModal("Error: ERRORERRORERROR.")} style={{position: "absolute", top: "55%"}}>ERR</button> */}
    </>
  )
}

export default connect(state => state.modal, actionCreators)(Modal);
