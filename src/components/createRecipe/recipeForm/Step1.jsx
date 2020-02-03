import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import DropDown from "../../dropDown/DropDown";
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Section1,
  NavigationSection1,
  Addtitle,
  Section2,
  Title,
} from "./FormStyled.styles";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     color: 'white'
//     // font-size: 18px
//   },
// }));

const getAllCategoiresUrl = `${process.env.REACT_APP_API_BASE_URL}api/category`;
const getAllTagsUrl = `${process.env.REACT_APP_API_BASE_URL}api/tag`;


function Step1(props) {

  const {
    goForward,
    addRecipeToBody,
    addRecipeCategoriesToBody,
    addRecipeTagsToBody
  } = props;

  const [inputState, setInputState] = useState({
    title: "",
    description: "",
    time_required: "",
    difficulty: "",
    budget: "",
    user_id: localStorage.getItem("userID"),
    recipe_categories: "",
    recipe_tags: ""
  });

  const inputHandler = e => {
    e.preventDefault();
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    // body.recipe
    const recipe = { ...inputState };
    delete recipe.tags;
    delete recipe.recipe_categories;
    delete recipe.recipe_tags;
    addRecipeToBody(recipe);

    // body.recipe_categories
    addRecipeCategoriesToBody([inputState.recipe_categories])

    // body.recipe_tags
    addRecipeTagsToBody([inputState.recipe_tags])
    
    goForward(e);
  };

  const useStyles = makeStyles(theme => ({
    inputRoot: {
      fontSize: 30
    },
    inputRoot2: {
      fontSize: 15
    },
    labelRoot: {
      fontSize: 30,
      color: "white",
      "&$labelFocused": {
        color: "white"
      }
    },
    labelRoot2: {
      fontSize: 15,
      color: "white",
      "&$labelFocused": {
        color: "white"
      }
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: 'white'
    },
  }));
  

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <div>
      <Section1>
      <NavigationSection1>
            <Link to='/profile'>
             <Fab 
              style={{background: "none", "box-shadow": "none", "outline": 'none'}}
              >
                <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
              </Fab>
            </Link>
          <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
             <Fab 
              style={{background: "none", "box-shadow": "none", "outline": 'none'}}
              >
                <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
              </Fab>
        </button>
        </NavigationSection1>
        <Addtitle>
      <TextField
      id="standard-full-width"
      style={{ color: "white" }}
      type="text"
      onChange={inputHandler}
      value={inputState.title}
      name="title"
      placeholder="title"
      required
      fullWidth
      margin="normal"
      InputProps={{ classes: { root: classes.inputRoot } }}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.labelRoot,
          focused: classes.labelFocused
        }
      }}
        
      />
      <br></br>
        </Addtitle>
      </Section1>
      <Section2>
      <Title htmlFor="recipeCategoryInput">Category:</Title>
      <DropDown
        listUrl={getAllCategoiresUrl}
        name="recipe_categories"
        inputHandler={inputHandler}
        />
      <Title htmlFor="recipeCategoryInput">Description:</Title>
      <TextField
        id="margin-none"
        className={classes.textField}
        type="text"
        onChange={inputHandler}
        value={inputState.description}
        name="description"
        placeholder="description"
        fullWidth
        InputProps={{ classes: { root: classes.inputRoot2 } }}
        InputLabelProps={{
          shrink: true,
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused
            }
            }}
          />
      <br></br>
      <Title htmlFor="recipeCategoryInput">Time required:</Title>
      <TextField
            type="number"
            onChange={inputHandler}
            value={inputState.time_required}
            name="time_required"
            placeholder="time_required"
            min='1'
            max='1000'
            required
            InputProps={{ classes: { root: classes.inputRoot2 } }}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused
                }
              }}
            />
      <br></br>
      <Title htmlFor="recipeCategoryInput">Difficulty Level:</Title>
      <Select
        type="number"
        onChange={inputHandler}
        value={inputState.difficulty}
        name="difficulty"
        placeholder="difficulty"
        min="1"
        max="4"
        >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <br></br>
      <Title htmlFor="recipeCategoryInput">Budget:</Title>
      <TextField
        type="number"
        onChange={inputHandler}
        value={inputState.budget}
        name="budget"
        placeholder="budget"
        min="1"
        max="1000"
        InputProps={{ classes: { root: classes.inputRoot2 } }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused
              }
              }}
        required
          />
      <br></br>
      {/* <input
        type="text"
        onChange={inputHandler}
        value={inputState.user_id}
        name="user_id"
        placeholder="user_id"
        disabled
        /> */}
      <br></br>
      <br></br>
      {/* <Title>Options:</Title>
          <SwitchDiv>
            <div>
            <p>Private</p><br></br>
          <p>The private option hides your recipe from other users</p>
          </div>
            <label class="switch">
              <input type="checkbox" name="options" value="Private" />
              <span class="slider round"></span>
            </label>
          </SwitchDiv> */}
      <Title>Add Tags</Title>
        <DropDown
          listUrl={getAllTagsUrl}
          name="recipe_tags"
          inputHandler={inputHandler}
          className="category"
          type="text"
          placeholder="Add as many tags as you want to easily find your recipe"
          required
          />
      <br></br>
        </Section2>
      </div>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step1);
