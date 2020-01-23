import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 0.5rem 1rem;
  width: 80%;
  background: rgb(255, 48, 100);
  border-radius: 10px;

  /* To centre it: */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .message {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
`;