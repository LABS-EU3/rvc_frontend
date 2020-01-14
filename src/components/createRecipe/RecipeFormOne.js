import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import Footer from "../navigation/FooterNav";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  // ProgressBarDiv,
  // Section1,
  // SwitchDiv,
  // StyledForm,
  // NavigationSection1,
  // Addtitle,
  // Title,
  // Section2,
  Step
} from "../../globals/form-styles";


export const ProgressBarDiv = styles.div`
height: 1rem;
background-color: #C4C4C4;
margin: 0 auto;
width: 80%;
margin-top:4px;
border-radius: 5px;
.progress{
  background-color: #0AB28A;
  height: 10px;
  width: 17%;
  border-radius: 5px;
}
`;

export const Section1 = styles.div`
display:flex;
flex-direction:column;
background-color: #0AB28A;
height: 15rem;
width:100%;
box-shadow: 0px 8px 30px #DAD9D9;
margin-bottom:10px;
`

const SwitchDiv = styles.div`
font-size: 1.6rem;
display: flex;
align-items: center;
margin-bottom: 1.5rem;
justify-content: space-between; 
color: rgba(0, 0, 0, 0.51);
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

export const StyledForm = styles.form`
display: flex;
flex-direction: column;
// margin-top: 4rem;
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
`
export const NavigationSection1 = styles.div`
display:flex;
justify-content: space-between;
`

export const Addtitle = styles.div `
margin-left:5%;
margin-right:15%;

`

export const Title = styles.h3 `
font-weight: 300;
font-size: 20px;
line-height: 18px;
margin-bottom: 15px;
margin-top:15px;
`

export const Section2 = styles.div `
display:flex;
flex-direction:column;
text-align: left;
margin:5%;
margin-top:8px;
font-weight: 300;
font-size: 15px;
`
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
  const progressBarWidth = (step-1) * 100/4;
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     color: 'white',
  //     fontSize: '30px'
  //   },
  // }));

  // const useStyles = makeStyles(theme => ({
  //   inputRoot: {
  //     fontSize: 30
  //   },
  //   labelRoot: {
  //     fontSize: 30,
  //     color: "white",
  //     "&$labelFocused": {
  //       color: "white"
  //     }
  //   },
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     color: 'white'
  //   },
  // }));

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
          <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
          <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
        </button>
        </NavigationSection1>
            {/* <Addtitle>
            <TextField
              id="standard-full-width"
              style={{ color: "white" }}
              onChange={onHandleChange}
              type="text"
              name="title"
              placeholder="Enter recipe name"
              required
              fullWidth
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
        />
      </Addtitle> */}
      <Addtitle>
            <TextField
              id="standard-full-width"
              style={{ color: "white" }}
              onChange={onHandleChange}
              type="text"
              name="title"
              placeholder="Enter recipe name"
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
      </Addtitle>
        </Section1>
        <Section2>
          <Title htmlFor="recipeCategoryInput">Category:</Title>
          <Select
            Select
            onChange={onHandleChange}
            name="recipe_category"
            required
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
            fullWidth
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
        </div>
        <div className="recipe-input">
          <TextField
            onChange={onHandleChange}
            type="number"
            name="time_required"
            placeholder="Time required"
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
        </div>
        <div className="recipe-input">
          {/* <TextField
            onChange={onHandleChange}
            type="number"
            name="budget"
            placeholder="Budget (USD)"
            min='1'
            max='1000'
            required
          /> */}
              <TextField
            onChange={onHandleChange}
            type="number"
            name="budget"
            placeholder="Budget (USD)"
            min='1'
            max='1000'
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
        </div>
        <div>
          <div>
          <Title htmlFor="recipeCategoryInput">Difficulty Level:</Title>
          </div>
          <Select
            onChange={onHandleChange}
            name="difficulty"
            required
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
            required
          />
          {/* <div className="step">Step {step}/3</div> */}
          {/* <ProgressBarDiv>
            <div className="progress"></div>
          </ProgressBarDiv> */}
          {/* <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: progressBarWidth+"%",
              borderRadius: "5px"
            }}
          ></div> */}
        {/* </div> */}
            {/* /> */}
          {/* <button onClick={nextPage}>Next</button> */}
          <Step >
            Step {step}/4
          {/* <ProgressBarDiv>
            <div 
            className="progress"
            ></div>
          </ProgressBarDiv> */}
          </Step >
        </div>
        </Section2>
      </StyledForm>
      <Footer />
    </div>
  );
}
