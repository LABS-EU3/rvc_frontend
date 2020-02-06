import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from "@material-ui/core/Fab";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  Section3,
  AddItem
} from "./FormStyled.styles";

import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

function Step4(props) {
  const { goForward, goBackward, addInstructionsToBody } = props;
  const [inputState, setInputState] = useState("");
  const [instructionError, setInstructionError] = useState(false);
  const [instructionsArray, setInstructionsArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setInputState(e.target.value);
  };

  const goBack = e => {
    goBackward();
  };

  const onSubmit = e => {
    e.preventDefault();
    addInstructionsToBody(instructionsArray);
    goForward(e);
  };

  const addInstruction = e => {
    e.preventDefault();
    if (inputState) {
      setInstructionsArray([...instructionsArray, inputState]);
    } else {
      setInstructionError(true);
      setTimeout(() => {
        setInstructionError(false);
      }, 2000);
    }
  };

  const removeInstruction = (e, ing, i) => {
    e.preventDefault();
    setInstructionsArray(
      instructionsArray.filter(instruction => instruction !== ing)
    );
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
      // "&$labelFocused": {
      //   color: "white"
      // }
    },
    labelRoot2: {
      fontSize: 15,
      color: "white",
      // "&$labelFocused": {
      //   color: "white"
      // }
    },
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      color: "white"
    }
  }));

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <Section3>
        <NavigationSection1>
          <Fab
            style={{
              background: "none",
<<<<<<< HEAD
              "box-shadow": "none",
              outline: "none"
            }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
          </Fab>
          <Fab
            style={{
              background: "none",
              "box-shadow": "none",
              outline: "none"
            }}
          >
            <button type="submit">
              <CheckIcon className="check-icon" cgit />
            </button>
=======
              "boxShadow": "none",
              outline: "none"
            }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit="true" />
>>>>>>> 6b5ad4f9204e2bcb7929ae8d3aa7f50d3ccfac37
          </Fab>
          {/* <Fab
            style={{
              background: "none",
              "boxShadow": "none",
              outline: "none"
            }}
          > */}
            <button type="submit" style={{border: "none", background: "inherit", outline: "none"}}>
              <CheckIcon className="check-icon" cgit="true" />
            </button>
          {/* </Fab> */}
        </NavigationSection1>
        <Addtitle>
          <h1>Add instruction</h1>
        </Addtitle>
      </Section3>
      <Section2b>
        <br></br>
        <TextField
          id="filled-full-width"
          placeholder="Add instruction"
          fullWidth
          margin="normal"
          InputProps={{ classes: { root: classes.inputRoot2 } }}
          className={classes.textField}
          variant="filled"
          type="text"
          name="instruction"
          onChange={inputHandler}
        />

        {instructionError && (
          <p className="warning-paragraph">Add at least one instruction!</p>
        )}
        <p className="description-paragraph">
          click on the plus button to add your instruction!
        </p>
        <div onClick={addInstruction} style={{ margin: "0 auto" }}>
          <AddCircleOutlineTwoToneIcon
<<<<<<< HEAD
            cgit
=======
            cgit="true"
>>>>>>> 6b5ad4f9204e2bcb7929ae8d3aa7f50d3ccfac37
            style={{ fontSize: 40, color: "#0AB38A" }}
          />
        </div>
        {instructionsArray.length
          ? instructionsArray.map((ing, i) => (
<<<<<<< HEAD
              <AddItem>
                <p key={i}>{ing}</p>
=======
              <AddItem key={i}>
                <p>{ing}</p>
>>>>>>> 6b5ad4f9204e2bcb7929ae8d3aa7f50d3ccfac37
                <button
                  onClick={e => {
                    removeInstruction(e, ing, i);
                  }}
                >
                  X
                </button>
              </AddItem>
            ))
          : null}
      </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);
