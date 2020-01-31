import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DropDown from "../../dropDown/DropDown";
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

  const removeInstruction = (e, ing, i) => {
    e.preventDefault();
    setInstructionsArray(instructionsArray.filter(instruction => instruction !== ing))
    
  }

  const goBack = e => {
    goBackward();
  };

  const useStyles = makeStyles(theme => ({
    inputRoot: {
      fontSize: 30
    },
    inputRoot2: {
      fontSize: 20
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
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: "white"
    }
  }));

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <Section3>
        <NavigationSection1>
          <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />

          <CheckIcon className="check-icon" onClick={goForward} cgit />
        </NavigationSection1>
        <Addtitle>
          <h1>Add instruction</h1>
        </Addtitle>
      </Section3>
      <Section2b>
        <TextField
          id="filled-full-width"
          placeholder="Add instruction"          
          fullWidth
          margin="normal"
          InputProps={{ classes: { root: classes.inputRoot2 } }}
          className={classes.textField}          
          variant="filled"
          onChange={inputHandler}
          type="text"
          name="instruction"
        />

        <p className="description-paragraph">click on the plus button to add your instruction!</p>
        <div onClick={addInstruction} style={{ margin: "0 auto" }}>
          <AddCircleOutlineTwoToneIcon
            cgit
            style={{ fontSize: 40, color: "#0AB38A" }}
          />
        </div>
        <div>
          {instructionsArray.length
            ? instructionsArray.map((ing, i) => (
                <AddItem>
                  <p key={i}>{ing}</p>
                  <button onClick={ e => {removeInstruction(e, ing, i)} }>X</button>                  
                </AddItem>
              ))
            : null}
        </div>
      </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);
