import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DropDown from "../../dropDown/DropDown";
import Fab from '@material-ui/core/Fab';

import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Title2,
  Section3,
  AddItem
} from "./FormStyled.styles";

function Step4(props) {
  const { goForward, goBackward, addInstructionsToBody } = props;

  const [inputState, setInputState] = useState("");

  const [instructionsArray, setInstructionsArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setInputState(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addInstructionsToBody(instructionsArray);
    goForward(e);
  };

  const addInstruction = e => {
    e.preventDefault();
    setInstructionsArray([...instructionsArray, inputState]);
  };

  const goBack = e => {
    goBackward();
  };

  return (
    <form onSubmit={onSubmit}>
      <Section3>
        <NavigationSection1>
         <Fab 
          style={{"background": "none"
          }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
          </Fab>
          <Fab 
          style={{"background": "none"
          }}
          >
            <CheckIcon className="check-icon" onClick={goForward} cgit />
          </Fab>
        </NavigationSection1>
        <Addtitle>
          <h1>Add instruction</h1>
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
            shrink: true
          }}
          variant="filled"
          onChange={inputHandler}
          type="text"
          name="instruction"
        />
        <div onClick={addInstruction} style={{ margin: "0 auto" }}></div>
        <div onClick={addInstruction} style={{ margin: "0 auto" }}>
        <Fab 
          style={{"background": "none",
           "box-shadow": "none", 
           "outline": 'none'
          }}
          >
             <AddCircleOutlineTwoToneIcon
            cgit
            style={{ fontSize: 40, color: "#0AB38A" }}
          />
          </Fab>
        </div>
        <div>
          {instructionsArray.length
            ? instructionsArray.map((ing, i) => (
                <AddItem>
                  <p key={i}>{ing}</p>
                </AddItem>
              ))
            : null}
        </div>
      </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);
