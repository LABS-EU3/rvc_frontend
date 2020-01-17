import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"




function Step4(props) {
  const { goForward, addInstructionsToBody } = props;

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

  return (
    <form onSubmit={onSubmit}>
      <button type="submit"> Next </button>
      <br></br>
      <input type="text" name="instruction" onChange={inputHandler} />
      <button type="button" onClick={addInstruction}>
        Add Instruction
      </button>
      <ul>
        {instructionsArray.length
          ? instructionsArray.map((ing, i) => <li key={i}>{ing}</li>)
          : null}
      </ul>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);
