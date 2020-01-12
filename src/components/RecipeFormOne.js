import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from './Footer'

const ProgressBarDiv = styles.div`
height: 1rem;
background-color: #C4C4C4;
margin: 0 auto;
width: 80%;
border-radius: 5px;
.progress{
  background-color: #0AB28A;
  height: 10px;
  width: 17%;
  border-radius: 5px;
}
`;

const StyledForm = styles.form`
display: flex;
flex-direction: column;
margin-top: 4rem;
input {
  width: 80%;
  height: 4rem;
  &.category{
    background-color: red;
  }
}
.section2 {
  display: flex;
  flex-direction: column;
  align-items: center;  
  select {
    width: 80%;
    height: 40px;
  }

}

.section3 {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    width: 80%;
  }
}





`;

export default function RecipeFormOne(props) {
  const { history, step, nextPage, onHandleChange, onHandleSubmit } = props;

  return (
    <div>
      <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={() => history.push("/profile")}
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <div
          onSubmit={onHandleSubmit}
          onClick={nextPage}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </div>
      </div>

      <StyledForm>
        <div className="recipe-input">
          <input
            onChange={onHandleChange}
            type="text"
            name="title"
            placeholder="enter recipe name"
          />
        </div>
        <div className="section2">
          <label htmlFor="recipeCategoryInput">Category:</label>
          <select
            id="recipeCategoryInput"
            onChange={onHandleChange}
            name="recipe_category"
          >
            <option value="" label="pick a category" />
            <option value="breakfast" label="breakfast" />
            <option value="lunch" label="lunch" />
            <option value="dinner" label="dinner" />
          </select>
        </div>
        <div className="section3">
          <p>Options:</p>
          <div>
            <label>Private</label>
            <input type="checkbox" name="options" value="Private" />
          </div>

          <p>The private option hides your recipe from other users</p>
          <p>Add Tags</p>
          <input className="category"
            onChange={onHandleChange}
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
          />
          <div className="step">Step {step}/3</div>
          <button onClick={nextPage}>Next</button>
          <ProgressBarDiv>
            <div className="progress"></div>
          </ProgressBarDiv>
        </div>
      </StyledForm>
      <Footer />
    </div>
  );
}
