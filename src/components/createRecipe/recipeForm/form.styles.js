import styled from "styled-components";

export const NewRecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  position: relative;

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background: #0ab38a;
    backdrop-filter: blur(27.1828px);

    label,
    input {
      color: #ffffff;
      border: none;
      outline: none;
      background: inherit;
      margin-left: 25px;
      margin-bottom: 50px;
    }
    label {
      font-size: 14px;
    }
    input {
      width: 70%;
      border-bottom: 2px solid #ffffff;
      padding: 10px;
      font-size: 16px;
    }
  }
`;
