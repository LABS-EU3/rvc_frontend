import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

const Counter = props => {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, actionCreators)(Counter);