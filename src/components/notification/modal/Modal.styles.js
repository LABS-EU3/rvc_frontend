import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 1rem 2rem;
  width: 80%;
  background: yellow;
  border-radius: 10px;

  /* To centre it: */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  h2 {
      color: red;    
    }
`;