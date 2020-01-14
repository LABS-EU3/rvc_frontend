import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  ProgressBarDiv,
  Section1,
  SwitchDiv,
  StyledForm,
  NavigationSection1,
  Addtitle,
  Title,
  Section2,
  Step
} from "../globals/form-styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white'
    // font-size: 18px
  },
}));


export default function RecipeFormOne(props) {
  const { history, step, nextPage, onHandleChange, onHandleSubmit } = props;
  const classes = useStyles();
  return (
    <div>
      <StyledForm
        onSubmit={onHandleSubmit}
      >
      <Section1>
        <NavigationSection1>
          <div
              onClick={() => history.push("/profile")}
            >
            <Link to='/profile'>
              <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
            </Link>
          </div>
          <button type='submit'>
          <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
        </button>
        </NavigationSection1>
            <Addtitle>
            <TextField
              id="standard-full-width"
              style={{ color: "white" }}
              onChange={onHandleChange}
              type="text"
              name="title"
              placeholder="Enter recipe name"
              fullWidth
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
        />
      </Addtitle>
        </Section1>
        <Section2>
          <Title htmlFor="recipeCategoryInput">Category:</Title>
          <Select
            Select
            onChange={onHandleChange}
            name="recipe_category"
          >
          <MenuItem value="1">breakfast</MenuItem>
          <MenuItem value="2">brunch</MenuItem>
          <MenuItem value="3">lunch</MenuItem>
          <MenuItem value="4">dinner</MenuItem>
          <MenuItem value="5">starter</MenuItem>
          <MenuItem value="6">main</MenuItem>
          <MenuItem value="7">dessert</MenuItem>
          <MenuItem value="8">soup</MenuItem>
          <MenuItem value="9">salad</MenuItem>
          <MenuItem value="10">beverage</MenuItem>
          <MenuItem value="11">snack</MenuItem>
          <MenuItem value="12">misc</MenuItem>
            {/* <option value="" label="pick a category" /> */}
          </Select>
        <div className="recipe-input">
          <TextField
                    id="margin-none"
                    className={classes.textField}
            onChange={onHandleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="recipe-input">
          <TextField
            onChange={onHandleChange}
            type="number"
            name="time_required"
            placeholder="Times"
            min='1'
            max='1000'
            />
        </div>
        <div className="recipe-input">
          <TextField
            onChange={onHandleChange}
            type="number"
            name="budget"
            placeholder="Budget (USD)"
            min='1'
            max='1000'
          />
        </div>
        <div>
          <div>
          <Title htmlFor="recipeCategoryInput">Difficulty Level:</Title>
          </div>
          <Select
            onChange={onHandleChange}
            name="difficulty"
          >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
            {/* <option value="" label="pick a level" /> */}
          </Select>
        </div>
        <div>
          <Title>Options:</Title>
          <SwitchDiv>
            <div>
            <p>Private</p><br></br>
          <p>The private option hides your recipe from other users</p>
          </div>
            <label class="switch">
              <input type="checkbox" name="options" value="Private" />
              <span class="slider round"></span>
            </label>
          </SwitchDiv>
          <Title>Add Tags</Title>
          <input
            className="category"
            onChange={onHandleChange}
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
            />
          {/* <button onClick={nextPage}>Next</button> */}
          <Step >
            Step {step}/3
          <ProgressBarDiv>
            <div className="progress"></div>
          </ProgressBarDiv>
          </Step >
        </div>
        </Section2>
      </StyledForm>
      <Footer />
    </div>
  );
}
