import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';

import { useParams, Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Section3,
  AddItem
} from "../EditRecipe.styles";

function Step4(props) {
  const { 
    editInstruction,
    displayNotificationModal,
   } = props;

   const recipeID = useParams().id.trim()
  
  const [inputState, setInputState] = useState("");

  const [instructionsArray, setInstructionsArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setInputState(e.target.value);
  };

  const onEditSubmit = e => {
    e.preventDefault();
    editInstruction(recipeID, instructionsArray);
    displayNotificationModal('The edited recipe has been added to your cookbook!', '/seerecipe/:id');
  };

  const addInstruction = e => {
    e.preventDefault();
    setInstructionsArray([...instructionsArray, inputState]);
  };

  return (
    <form onSubmit={onEditSubmit}>
      <Section3>
      <NavigationSection1>
          <Link to='/editrecipe/:id'>
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
        <h1>Modify instruction</h1>
        </Addtitle>
      </Section3>
      <Section2b>
      <TextField
          id="filled-full-width"
          placeholder="Add instruction"
          helperText="click on the plus button to add your instruction!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={inputHandler}
          type="text" 
          name="instruction"
          />
         <div
        onClick={addInstruction}
        style={{"margin" : "0 auto"}}
        ></div>
        <div
        onClick={addInstruction}
        style={{"margin" : "0 auto"}}
        >
        <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
        </div>
      <div>
        {instructionsArray.length
          ? instructionsArray.map((ing, i) => 
          <AddItem>
            <p key={i}>{ing}</p>
          </AddItem>)
          : null}
      </div>
          </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);