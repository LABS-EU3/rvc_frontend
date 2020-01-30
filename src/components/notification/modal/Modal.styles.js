import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* Top level, here, is the screen cover: makes the page unclickable! */
  background: rgba(255, 255, 255, .5);

  &#like-modal-div {
    background: none;
  }

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  /* Scrolling needs to be disabled on the parent element, though. */
  /* Solution: first line of return statement of the App component! */

  .modal {
    padding: 0.5rem 1rem;
    width: 80%;
    background: rgb(255, 48, 100);
    border-radius: 10px;

    /* To centre the modal: */
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    /* And to animate it: */
    animation: fade-in 0.15s ease-in;

    &#like-modal {
      top: 85%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      animation: fade-in-out 3s ease-in-out;
    }

    .message {
      text-align: left;
      font-size: 1.5rem;
      margin-bottom: 1rem;

      &#like-message {
        margin-bottom: 0;
      }
    }

    .buttons {
      display: flex;
      font-weight: bold;

      .button-div {
        padding: 0.5rem 1rem;
        margin: 0.2rem;
        border-radius: 1rem;

        &:hover {
          cursor: pointer;
        }
      }

      a {
        text-decoration: none;
        color: black;
        -webkit-tap-highlight-color: transparent;
      }

      #view {
        border: 1.5px solid transparent; 
        /* ^To keep it in line with #continue! */
      }

      #continue, #redirect {
        border: 1.5px solid white;
      }
    }
  }

  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fade-in-out {
    0% { opacity: 0; }
    5% { opacity: 1; }
    95% { opacity: 1; }
    100% { opacity: 0; }
  }
`;