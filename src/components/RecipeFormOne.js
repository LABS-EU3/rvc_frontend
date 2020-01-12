import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";

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

const SwitchDiv = styles.div`
font-size: 1.6rem;
display: flex;
align-items: center;
margin-bottom: 1.5rem;
justify-content: space-between; 
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`

const StyledForm = styles.form`
display: flex;
flex-direction: column;
margin-top: 4rem;
input {
  width: 80%;
  height: 4rem;
  &.category{
  }
}
.section2 {  
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 3rem;
  font-size: 1.4rem;
  label {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
  select {
    width: 80%;
    height: 40px;
    border-radius: 2rem;
  }

}

.section3 {
  font-size: 1.6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    width: 80%;
  }
  .options-paragraph   {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
}
`;

export default function RecipeFormOne(props) {
  const { history, step, nextPage, onHandleChange, onHandleSubmit } = props;

  return (
    <div>
      <StyledForm
        onSubmit={onHandleSubmit}
      >
      <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={() => history.push("/profile")}
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <button
          type='submit'
          // onClick={nextPage}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </button>
      </div>

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
          <p className="options-paragraph">Options:</p>
          <SwitchDiv>
            Private
            <label class="switch">
              <input type="checkbox" name="options" value="Private" />
              <span class="slider round"></span>
            </label>
          </SwitchDiv>

          <p>The private option hides your recipe from other users</p>
          <p>Add Tags</p>
          <input
            className="category"
            onChange={onHandleChange}
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
          />
          <div className="step">Step {step}/3</div>
          {/* <button onClick={nextPage}>Next</button> */}
          <ProgressBarDiv>
            <div className="progress"></div>
          </ProgressBarDiv>
        </div>
      </StyledForm>
      <Footer />
    </div>
  );
}
