import React from 'react'
import { StyledDiv } from './Modal.styles'; 
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

export function Modal(props) {
  const { modalType, message, buttonLink, disableContinue, isDisplaying, dismissModal } = props;
  
  // const { displayNotificationModal, displayErrorModal, displayLikeModal } = props;
  // ^For testing purposes!

  return (<>
    <StyledDiv id={`${modalType}-modal-div`}
      style={{display: isDisplaying ? "inherit" : "none"}}
    >
      <div className="modal" id={`${modalType}-modal`}>
        <div className="message" id={`${modalType}-message`}>
          <p>{message}</p>
        </div>
        <div className="buttons">
          {
            modalType === "notification" ? 
              <>
                <div className="button-div" id="view" onClick={dismissModal}>
                  <Link to={buttonLink}>VIEW</Link>
                </div>
                {
                  disableContinue ?
                  null :
                  <div className="button-div" id="continue" onClick={dismissModal}>CONTINUE</div>
                }
              </> :
            modalType === "like" ?
              <div className="button-div" id="view" onClick={dismissModal}>
                <Link to={buttonLink}>VIEW</Link>
              </div> :
            modalType === "error" ?
              <div className="button-div" id="redirect" onClick={dismissModal}>
                <Link to={buttonLink}>REDIRECT</Link>
              </div> :
            <></>
          }
        </div>
      </div>
    </StyledDiv>

    {/* For testing purposes! */}
    {/* <button onClick={() => displayNotificationModal("The thing worked!", "/profile")} style={{position: "absolute", top: "50%"}}>NOTIF</button>
    <button onClick={() => displayLikeModal("Recipe added to cookbook!", "/profile")} style={{position: "absolute", top: "55%"}}>LIKE</button>
    <button onClick={() => displayErrorModal("Error: ERRORERRORERROR.")} style={{position: "absolute", top: "60%"}}>ERR</button> */}
    </>
  )
}

export default connect(state => state.modal, actionCreators)(Modal);
